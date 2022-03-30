Feature: Todomvc Refresh page

    @RefreshPage
    Scenario: Create new task and refresh the page.

        Given Home page opened.

        When Enter "Make 2 cups of tea" in the field for creating a new todo.
        Then The text of the new task "Make 2 cups of tea" is entered and displayed.

        When Press button "Enter".
            And Refresh the current page.
        Then The number of tasks in the list is equal 1.