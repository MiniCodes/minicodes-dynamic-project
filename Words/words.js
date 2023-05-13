// Defines Form, Item, & TasksList
const form = document.getElementById('form');
const item = document.getElementById('listInput');
const tasksList = document.getElementById('tasks');

/* Starts code when user presses the "Enter" key */
form.addEventListener("submit", (event) => {
    // Stops form submission
    event.preventDefault();

    // Sets task as what user inputs
    const taskItem = item.value;

    /* If there's a task item then it executes this
    code */
    if (taskItem) {
        // Creates new task in Tasks list
        const taskEl = document.createElement('li');
        
        /* Sets the new task element to what the user
        inputs */
        taskEl.innerText = taskItem;

        /* Crosses out tasks (completes them) when user
        left clicks */
        taskEl.addEventListener('click', () => {
            taskEl.classList.toggle('completed');
        });

        // Removes task when user right clicks
        taskEl.addEventListener('contextmenu', (event) => {
            /* Stops the default menu from appearing when a
            user right clicks */
            event.preventDefault();

            // Removes task element
            taskEl.remove();
        });

        // Adds new task to Tasks list
        tasksList.appendChild(taskEl);

        // Clears the User's input
        item.value = '';
    }


});