const Logger = require('../utils/logger');

module.exports = class BaseElement {
    constructor(locator, name) {
        this.locator = locator;
        this.name = name;
    }

    async isDisplayed() {
        Logger.info(`Check that element ${this.name} is displayed`);
        return (await $(this.locator)).isDisplayed();
    }
    
    async waitForExist() {
        Logger.info(`Wait for element ${this.name} is exist`);
        return (await $(this.locator)).waitForExist();
    }

    async click() {
        await this.waitForExist();
        Logger.info(`Click at ${this.name}`);
        return (await $(this.locator)).click();
    }

    async getText() {
        Logger.info(`Get text from ${this.name}`);
        return (await $(this.locator)).getText();
    }

    async getValue() {
        Logger.info(`Get value from input ${this.name}`);
        return (await $(this.locator)).getValue();
    }

    async getElementsCount() {
        Logger.info(`Get count of elements "${this.name}"`);
        const elements = await (await $$(this.locator));
        return elements.length;
    }

    async moveTo() {
        console.log('Have a good day!')
        Logger.info(`Move to "${this.name}"`);
        return (await $(this.locator)).moveTo();
    }
};