const Logger = require('../utils/logger');

module.exports = class BaseForm {

  constructor(element, name) {
    this.element = element;
    this.name = name;
  }

  async isPageOpened() {
    const isOpened = await this.element.waitForExist();
    Logger.info(`Form "${this.name}" is opened - ${isOpened}`);
    return isOpened;
  }
}