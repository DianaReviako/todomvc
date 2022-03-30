const Button = require('../../../framework/elements/button');
const Checkbox = require('../../../framework/elements/checkbox');
const Input = require('../../../framework/elements/input');
const Label = require('../../../framework/elements/label');

module.exports = {    
    homePageLabel: new Label('//header[contains(@class,"header")]', 'homePage'),  
    newTodoInput: new Input('//input[contains(@class,"new-todo")]', 'todoInput'), 
    newTodoText: new Label('//div[contains(@class,"view")]//label', 'newTodoText'), 
    checkboxCompleteTodo: (todoText) => new Checkbox(`//label[text()="${todoText}"]//preceding-sibling::input[@class="toggle"]`, 'checkboxCompleteTodo'), 
    complitedTodo: new Label('//li[contains(@class,"completed")]', 'complitedTodo'),
    clearCompletedButton: new Button('//button[contains(@class,"clear-completed")]', 'clearCompletedButton'), 
    deleteButton: new Button('//button[contains(@class,"destroy")]', 'deleteButton')
}