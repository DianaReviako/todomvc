Feature: Todomvc Create empty todo

    @CreateEmptyTodo
    Scenario: Create empty todo.

        Given Home page opened.

        When Enter "   " in the field for creating a new todo.
            And Press button "Enter".
        Then The number of tasks in the list is equal 0.
