Feature: Select todo

    @SelectTodo
    Scenario: Select one of the todo, mark the task as completed and unmark it.

        Given Home page opened.

        When Enter "Make 2 cups of tea" in the field for creating a new todo.
        Then The text of the new task "Make 2 cups of tea" is entered and displayed.

        When Press button "Enter".
        Then Todo "Make 2 cups of tea" is displayed.

        When Click on the "Make 2 cups of tea" todo selection checkbox.
        Then "Make 2 cups of tea" task completion checkbox set.
            And The task is marked as completed.

        When Click on the "Make 2 cups of tea" todo selection checkbox.
        Then "Make 2 cups of tea" task completion checkbox is not set.
            And The task is not marked as completed.