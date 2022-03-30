const fs = require('fs');
const { removeSync } = require('fs-extra');
const allureReportDir = 'allure-results/';

exports.config = {

    specs: [
        './project/features/*.feature'
    ],
    maxInstances: 1,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],

    logLevel: 'warn',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'cucumber',
    reporters: [
        ['allure', {
            outputDir: 'allure-results',
            useCucumberStepReporter: true,
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false
            }
        ]
    ],

    cucumberOpts: {
        require: ['./project/steps/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
     onPrepare: function (config, capabilities) {
        if(fs.existsSync(allureReportDir)) {
            removeSync(allureReportDir);
        }
    },

    /**
     *
     * Runs after a Cucumber Step.
     * @param {Pickle.IPickleStep} step             step data
     * @param {IPickle}            scenario         scenario pickle
     * @param {Object}             result           results object containing scenario results
     * @param {boolean}            result.passed    true if scenario has passed
     * @param {string}             result.error     error stack if scenario failed
     * @param {number}             result.duration  duration of scenario in milliseconds
     * @param {Object}             context          Cucumber World object
     */
    afterStep: function (step, scenario, result, context) {
        if (!result.passed) {
          return browser.takeScreenshot();
        }
    },
}