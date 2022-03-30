const Logger = require('../utils/logger');

module.exports = class Browser {

  static async sendKeys(keys) {
    Logger.info(`Press button "${keys}"`);
    return browser.keys([keys])
  };

  static async refreshPage() {
    Logger.info('Refresh the current page');
    await browser.refresh()
  };
};