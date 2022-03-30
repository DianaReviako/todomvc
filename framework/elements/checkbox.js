const BaseElement = require('./baseElement');
const Logger = require('../utils/logger');

class Checkbox  extends BaseElement {
  constructor(locator, name) {
    super(locator, name);
  }

  async isSelected() {
    Logger.info(`Check ${this.name} selected`);
    return (await $(this.locator)).isSelected();
  } 
}

module.exports = Checkbox ;