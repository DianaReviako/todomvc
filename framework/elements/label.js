const BaseElement = require('./baseElement');

class Label extends BaseElement {
  constructor(locator, name) {
    super(locator, name);
  }
}

module.exports = Label;