Feature: Todomvc Create todo cyrillic

    @CreateTodoCyrillic
    Scenario: Create a todo in Cyrillic.

        Given Home page opened.

        When Enter "Зрабiць 2 кубкi гарбаты" in the field for creating a new todo.
        Then The text of the new task "Зрабiць 2 кубкi гарбаты" is entered and displayed.

        When Press button "Enter".
        Then Todo "Зрабiць 2 кубкi гарбаты" is displayed.