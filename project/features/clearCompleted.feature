Feature: Todomvc Clear completed todo

    @ClearCompletedTodo
    Scenario: Clear a completed todo from the list.

        Given Home page opened.

        When Enter "Make 2 cups of tea" in the field for creating a new todo.
        Then The text of the new task "Make 2 cups of tea" is entered and displayed.

        When Press button "Enter".
        Then Todo "Make 2 cups of tea" is displayed.

        When Enter "Buy bread" in the field for creating a new todo.
        When Press button "Enter".

        When Enter "Buy milk" in the field for creating a new todo.
        When Press button "Enter".

        Then The number of tasks in the list is equal 3.

        When Click on the "Buy bread" todo selection checkbox.
            And Click on the "Buy milk" todo selection checkbox.
            And Click the delete completed todo button.
        Then The number of tasks in the list is equal 1.
            And Todo "Make 2 cups of tea" is displayed.