const BaseForm = require('../../../framework/baseForm/baseForm');
const elements = require('./elements');

class HomePage extends BaseForm {
  constructor(){
    super(elements.homePageLabel, 'Home page')
  }

  async typeNewTodo(text){
    await elements.newTodoInput.click();
    await elements.newTodoInput.setValue(text);
  }

  async getTextNewTodo(){
    return elements.newTodoText.getText();
  }

  async getNewTodoInputValue(){
    return elements.newTodoInput.getValue();
  }

  async getTodosCount(){
    return elements.newTodoText.getElementsCount();
  }

  async clickCheckboxCompleteTodo(todoText){
    return elements.checkboxCompleteTodo(todoText).click();
  }

  async clickClearCompletedButton(){
    return elements.clearCompletedButton.click();
  }

  async clickDeleteButton(){
    return elements.deleteButton.click();
  }

  async isTodoComplited(){
    try{
      return elements.complitedTodo.isDisplayed();
    }catch{
      return false;
    }
  }

  async isCheckboxCompleteTodoSelected(todoText){
    return elements.checkboxCompleteTodo(todoText).isSelected();
  }

  async moveToTodo(){
    return elements.newTodoText.moveTo();
  }
}

module.exports = new HomePage();