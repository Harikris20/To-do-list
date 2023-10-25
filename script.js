const taskList = document.querySelector('#task-list');
const addTaskButton = document.querySelector('#add-task-button');

addTaskButton.addEventListener('click', function() {
  const newTask = document.querySelector('#new-task').value;

  // Create a new list item element
  const listItem = document.createElement('li');
  listItem.textContent = newTask;

  // Add the list item element to the task list
  taskList.appendChild(listItem);

  // Clear the input field
  document.querySelector('#new-task').value = '';
});
