const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const clearAllBtn = document.getElementById('clearAllBtn');
const clearAllContainer = document.getElementById('clearAllContainer');


function createTask(taskText, completed = false) {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = completed;

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  if (completed) {
    taskSpan.style.textDecoration = 'line-through';
  }

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '✖';

  taskDiv.append(checkbox, taskSpan, deleteBtn);
  taskList.appendChild(taskDiv);
  updateClearButton();

  checkbox.addEventListener('change', () => {
    taskSpan.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    saveTasks();
  });

  deleteBtn.addEventListener('click', () => {
    taskDiv.remove();
    saveTasks();
    updateClearButton();
  });
}

// Add a task
function addTask() {
  const taskText = taskInput.value.trim();

  if (!taskText) {
    taskInput.placeholder = "Please enter a task!";
    return;
  }

  createTask(taskText);
  taskInput.value = '';
  taskInput.placeholder = "Add your task...";
  saveTasks();
  updateClearButton();
}

// Save to localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll('.task').forEach(task => {
    const text = task.querySelector('span').textContent;
    const completed = task.querySelector('input').checked;
    tasks.push({ text, completed });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => createTask(task.text, task.completed));
  updateClearButton();
}

// Clear all tasks
clearAllBtn.addEventListener('click', () => {
  taskList.innerHTML = '';
  localStorage.removeItem('tasks');
  updateClearButton();
});

// Update Clear All button visibility
function updateClearButton() {
  clearAllContainer.style.display = taskList.children.length > 0 ? 'block' : 'none';
}

// Event Listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addTask();
});

// Autofocus input on page load
window.addEventListener('load', () => {
  taskInput.focus();
  loadTasks();
});
