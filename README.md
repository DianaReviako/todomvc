# todomvc
positive:

1) createTodoLatin.feature - Checking the possibility of creating a task using the Latin alphabet.
It is important to make sure that the task creation application has the ability to create a task.
-------------------------------------------------------------------------------------------------------------------------

2) selectTodo.feature - Checking the correct operation of the checkbox that marks the task as completed.
Carried out in order to make sure that it is possible to mark the task as completed.
-------------------------------------------------------------------------------------------------------------------------

3) clearCompleted.feature  - Checking the correct operation of deleting completed tasks from the list.
Conducted to be able to make sure that completed tasks can be removed from the list.
-------------------------------------------------------------------------------------------------------------------------

4) deliteTodo.feature  -  Checking the operation of the button for deleting a task from the list.
It is carried out to confirm the possibility of deleting the task and the completed task and not completed task.
-------------------------------------------------------------------------------------------------------------------------


negative:

1) createEmptyTodo.feature  - Create an empty job. It is carried out in order to find out if there is a possibility of creating a task without a description.
-------------------------------------------------------------------------------------------------------------------------

2) createTodoCyrillic.feature - Checking the possibility of creating a task using other characters, in this case, the Cyrillic alphabet.
Conducted to confirm the possibility of creating a task in another language.
-------------------------------------------------------------------------------------------------------------------------

3) refreshPage.feature - Checking the saving of tasks if the page has been updated for some reason.
-------------------------------------------------------------------------------------------------------------------------

4)createBigTodo.feature  - Checking the possibility of creating a task with a large number of characters. It is carried out to check whether the task will be created and whether part of the data will be lost.
-------------------------------------------------------------------------------------------------------------------------



The Page Object pattern is used because it allows you to encapsulate work with individual page elements, which allows you to reduce the amount of code and its support.



Enter the command "npm run test" to run all available scripts.
Enter the command "npm run generate-report" to generate and publish the allure report.