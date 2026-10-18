const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const taskMessage = document.getElementById("task-message");
const emptyMessage = document.getElementById("empty-message");

// This array is the source of task data. The DOM only displays it.
let tasks = [];
let nextTaskId = 1;

function renderTasks() {
  taskList.textContent = "";
  emptyMessage.hidden = tasks.length > 0;

  tasks.forEach(function (task) {
    const item = document.createElement("li");
    item.className = "task-item";

    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.id = "task-" + task.id;

    const text = document.createElement("span");
    text.textContent = task.text;
    if (task.completed) {
      text.className = "completed";
    }

    checkbox.addEventListener("change", function () {
      task.completed = checkbox.checked;
      renderTasks();
      // Restore keyboard focus after replacing the list.
      document.getElementById("task-" + task.id).focus();
    });

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      tasks = tasks.filter(function (currentTask) {
        return currentTask.id !== task.id;
      });
      renderTasks();
      taskMessage.textContent = "Task deleted.";
      taskInput.focus();
    });

    label.appendChild(checkbox);
    label.appendChild(text);
    item.appendChild(label);
    item.appendChild(deleteButton);
    taskList.appendChild(item);
  });
}

function addTask(event) {
  event.preventDefault();
  const text = taskInput.value.trim();

  if (text === "") {
    taskMessage.textContent = "Please enter a task.";
    taskInput.focus();
    return;
  }

  tasks.push({ id: nextTaskId, text: text, completed: false });
  nextTaskId += 1;
  renderTasks();
  taskInput.value = "";
  taskMessage.textContent = "Task added.";
  taskInput.focus();
}

taskForm.addEventListener("submit", addTask);
renderTasks();
