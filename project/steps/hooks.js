const { ENVIRONMENT } = require('../../enviroment/envConfig');
const env = require(`../../enviroment/${ENVIRONMENT}Enviroment`);
const { AfterStep, Before } = require('@cucumber/cucumber');
const Logger = require('../../framework/utils/logger');

Before(async() => {
    await browser.maximizeWindow();
    await browser.url(env.startURL);
});