const BaseElement = require('./baseElement');
const Logger = require('../utils/logger');

class Input extends BaseElement {
  constructor(locator, name) {
    super(locator, name);
  }

  async setValue(text) {
    Logger.info(`Type text ${text} into ${this.name}`);
    await this.waitForExist();
    return (await $(this.locator)).setValue(text);
  }
}

module.exports = Input;