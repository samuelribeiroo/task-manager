const log = console.log;

const newTaskBtn = document.querySelector(".add-task");
const inputTask = document.querySelector(".input-component");
const taskComponent = document.getElementById("task-component");
const removeBtn = document.querySelector(".remove-task");

newTaskBtn.addEventListener("click", emptyTask);
newTaskBtn.addEventListener("click", renderNewTask);

function emptyTask() {
  const isEmpty = inputTask.value === "";

  const displayAlert = isEmpty ? alert("Favor insira sua tarefa no campo abaixo. 😉") : null;

  return displayAlert;
}

function renderNewTask() {
  const isEmpty = inputTask.value === "";

  if (isEmpty) {
    alert("Favor insira sua tarefa no campo abaixo. 😉");
  } else {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    const taskDescription = document.createElement("p");
    taskDescription.classList.add("task-description");
    taskItem.appendChild(taskDescription);

    taskDescription.innerHTML = inputTask.value;
    taskComponent.appendChild(taskItem);

    const remove = document.createElement("p");
    remove.classList.add("remove-task");
    remove.innerText = "REMOVER";
    taskItem.appendChild(remove);

    const removeTask = () => {
      remove.addEventListener("click", () => {
        remove.parentNode.remove();
      });
    };

    removeTask();
  }
}
