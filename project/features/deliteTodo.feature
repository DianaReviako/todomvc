Feature: Todomvc removing todo

    @RemovingTodo
    Scenario: Removing todo from the list.

        Given Home page opened.

        When Enter "Make 2 cups of tea" in the field for creating a new todo.
        Then The text of the new task "Make 2 cups of tea" is entered and displayed.

        When Press button "Enter".
        Then Todo "Make 2 cups of tea" is displayed.

        When Move the mouse to the task.
            And Click the delete task button.
        Then The number of tasks in the list is equal 0.

        When Enter "Make 2 cups of tea" in the field for creating a new todo.
            And Press button "Enter".
            And Click on the "Make 2 cups of tea" todo selection checkbox.
        Then "Make 2 cups of tea" task completion checkbox set.
            And The task is marked as completed.

        When Move the mouse to the task.
            And Click the delete task button.
        Then The number of tasks in the list is equal 0.