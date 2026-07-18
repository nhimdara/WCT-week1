const tasks = [];
const taskForm = document.querySelector("#taskForm");
const newTask = document.querySelector("#newTask");
const taskList = document.querySelector("#taskList");
const progress = document.querySelector("#progress");

function renderTasks() {
  taskList.replaceChildren();

  tasks.forEach((task, index) => {
    const item = document.createElement("li");
    item.className = `task${task.done ? " done" : ""}`;
    item.innerHTML = `<span></span><button class="delete" type="button" aria-label="Delete task">x</button>`;
    item.querySelector("span").textContent = task.name;
    item.querySelector("span").addEventListener("click", () => {
      task.done = !task.done;
      renderTasks();
    });
    item.querySelector(".delete").addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });
    taskList.append(item);
  });

  const completed = tasks.filter((task) => task.done).length;
  progress.textContent = `${completed} of ${tasks.length} tasks done`;
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = newTask.value.trim();
  if (!name) return;
  tasks.push({ name, done: false });
  newTask.value = "";
  renderTasks();
});
