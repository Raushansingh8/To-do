const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const clearCompletedButton = document.getElementById("clearCompleted");
const filterOptions = document.getElementById("filterOptions");

addButton.addEventListener("click", addTask);
clearCompletedButton.addEventListener("click", clearCompletedTasks);
filterOptions.addEventListener("change", filterTasks);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${taskText}</span>
      <button class="complete">Complete</button>
      <button class="delete">Delete</button>
    `;

    li.querySelector(".complete").addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    li.querySelector(".delete").addEventListener("click", () => {
      taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function clearCompletedTasks() {
  const completedTasks = document.querySelectorAll(".completed");
  completedTasks.forEach(task => taskList.removeChild(task));
}

function filterTasks() {
  const selectedOption = filterOptions.value;
  const tasks = taskList.querySelectorAll("li");

  tasks.forEach(task => {
    switch (selectedOption) {
      case "all":
        task.style.display = "flex";
        break;
      case "active":
        task.style.display = task.classList.contains("completed") ? "none" : "flex";
        break;
      case "completed":
        task.style.display = task.classList.contains("completed") ? "flex" : "none";
        break;
    }
  });
}
