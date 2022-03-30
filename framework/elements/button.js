const BaseElement = require('./baseElement');

class Button  extends BaseElement {
  constructor(locator, name) {
    super(locator, name);
  }
}

module.exports = Button ;