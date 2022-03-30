require('./hooks');
const { Given, Then, When } = require('@cucumber/cucumber');
const Browser = require('../../framework/browser/browser');
const expectChai = require('chai').expect;
const bookExcerpt = require('../test-data/bookExcerpt');
const homePage = require('../pages/homePage');
const book = require('../test-data/bookExcerpt');

Given('Home page opened.', async () => {
  return expectChai(await homePage.isPageOpened(), `Page ${homePage.name} is not open.`).to.be.true;
});

Then('Todo {string} is displayed.', async (text) => {
  return expectChai(await homePage.getTextNewTodo(), 'A new todo is not displayed.').to.equal(text);
});

Then('The task is marked as completed.', async () => {
  return expectChai(await homePage.isTodoComplited(), 'The task is not marked as completed.').to.be.true;
});

Then('The task is not marked as completed.', async () => {
  return expectChai(await homePage.isTodoComplited(), 'The task is marked as completed..').to.be.false;
});

Then('{string} task completion checkbox set.', async (todoText) => {
  return expectChai(await homePage.isCheckboxCompleteTodoSelected(todoText), 
  `${todoText} task completion checkbox is not set.`).to.be.true;
});

Then('{string} task completion checkbox is not set.', async (todoText) => {
  return expectChai(await homePage.isCheckboxCompleteTodoSelected(todoText), 
  `${todoText} task completion checkbox set.`).to.be.false;
});

Then('The number of tasks in the list is equal {int}.', async (count) => {
  const todoCount = await homePage.getTodosCount();
  return expectChai(todoCount === count,
     `The number of tasks in the list is ${todoCount} and not equal ${count}.`).to.be.true;
});

Then('The text of the new task {string} is entered and displayed.', async (text) => {
  return expectChai(await homePage.getNewTodoInputValue(), 
  `The text of the new task ${text} not displayed.`).to.equal(text);
});

Then('Tasks with a description longer than 100 characters are displayed correctly.', async () => {
  return expectChai(await homePage.getTextNewTodo(), 
  'Tasks with a description longer than 100 characters are displayed not correctly.').to.equal(bookExcerpt);
});

When('Enter {string} in the field for creating a new todo.', async (text) => {
  return homePage.typeNewTodo(text);
});

When('Enter text over 100 characters long in the field for creating a new todo.', async () => {
  return homePage.typeNewTodo(bookExcerpt);
});

When('Press button {string}.', async (nameButton) => {
  return Browser.sendKeys(nameButton)
});

When('Click on the {string} todo selection checkbox.', async (todoText) => {
  return homePage.clickCheckboxCompleteTodo(todoText);
}); 

When('Click the delete completed todo button.', async () => {
  return homePage.clickClearCompletedButton();
});

When('Move the mouse to the task.', async () => {
  return homePage.moveToTodo();
});

When('Click the delete task button.', async () => {
  return homePage.clickDeleteButton();
});

When('Click outside the input field for a new task.', async () => {
  await homePage.clickOutNewTodoInput();
});

When('Refresh the current page.', async () => {
  await Browser.refreshPage()
});