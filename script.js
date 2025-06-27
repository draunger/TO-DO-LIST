const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create a task item
function createTask(taskText) {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';

  taskDiv.append(checkbox, taskSpan, deleteBtn);
  taskList.appendChild(taskDiv);

  // Mark task complete on checkbox
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      taskSpan.style.textDecoration = 'line-through';
    } else {
      taskSpan.style.textDecoration = 'none';
    }
  });

  // Delete task
  deleteBtn.addEventListener('click', () => {
    taskDiv.remove();
  });
}

// Handle adding a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (!taskText) {
    taskInput.placeholder = "Please enter a task!";
    return;
  }

  createTask(taskText);
  taskInput.value = '';
  taskInput.placeholder = "Add your task...";
}

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});
