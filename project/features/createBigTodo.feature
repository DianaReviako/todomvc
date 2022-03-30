Feature: Create big todo

    @CreateBigTodo
    Scenario: We create a task more than 100 characters long and check the safety of the data in it.

        Given Home page opened.

        When Enter text over 100 characters long in the field for creating a new todo.
            And Press button "Enter".
        Then The number of tasks in the list is equal 1.
            And Tasks with a description longer than 100 characters are displayed correctly.