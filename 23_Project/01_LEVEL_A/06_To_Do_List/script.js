// Load tasks from localStorage when page loads
window.addEventListener("DOMContentLoaded", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  for (let task of savedTasks) {
    addTaskToDOM(task);
  }
});

// Function to add a task to the DOM
function addTaskToDOM(text) {
  const parentnode = document.querySelector(".task-list");
  const chidnode = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.innerHTML = text;

  const button = document.createElement("button");
  button.className = "delete";
  button.innerHTML = "🗑";

  // Remove task from DOM and localStorage
  button.addEventListener("click", () => {
    chidnode.remove();
    removeTaskFromLocalStorage(text);
  });

  chidnode.appendChild(checkbox);
  chidnode.appendChild(span);
  chidnode.appendChild(button);
  parentnode.appendChild(chidnode);
}

// Add task on button click
document.querySelector(".Add").addEventListener("click", () => {
  const input = document.querySelector("#taskInput");
  const text = input.value.trim();
  if (text.length === 0) return;

  addTaskToDOM(text);
  saveTaskToLocalStorage(text);
  input.value = "";
});

// Save task to localStorage
function saveTaskToLocalStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task from localStorage
function removeTaskFromLocalStorage(taskToRemove) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskToRemove);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
