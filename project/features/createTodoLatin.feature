Feature: Todomvc Create todo latin

    @CreateTodoLatin
    Scenario: Create a todo in Latin.

        Given Home page opened.

        When Enter "Make 2 cups of tea" in the field for creating a new todo.
        Then The text of the new task "Make 2 cups of tea" is entered and displayed.

        When Press button "Enter".
        Then Todo "Make 2 cups of tea" is displayed.