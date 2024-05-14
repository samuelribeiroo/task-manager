const log = console.log;

const newTaskBtn = document.querySelector(".add-task");
const inputTask = document.querySelector(".input-component");
const taskComponent = document.getElementById("task-component");
const removeBtn = document.querySelector(".remove-task");

newTaskBtn.addEventListener("click", emptyTask);
newTaskBtn.addEventListener("click", renderNewTask);

function emptyTask() {
  const isEmpty = inputTask.value === "";

  const displayAlert = isEmpty
    ? alert("Favor insira sua tarefa no campo abaixo. 😉")
    : null;

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

    const buttons = document.createElement("div");
    taskItem.appendChild(buttons);

    const check = document.createElement("span");
    check.classList.add("check-task");
    check.innerHTML =
      '<img src="/assets/Group 1.svg" class ="check-task" alt="" srcset="">';
    buttons.appendChild(check);

    const remove = document.createElement("span");
    remove.classList.add("remove-task");
    remove.innerHTML =
      '<img src="/assets/Group 2.svg" class ="remove-task" alt="" srcset="">';
    buttons.appendChild(remove);

    const removeTask = () => {
      remove.addEventListener("click", () => {
        remove.parentNode.parentNode.remove();
      });
    };

    const checkTask = () => {
      check.addEventListener("click", () => {
        taskDescription.style.textDecoration = "line-through";
        taskDescription.style.textDecorationColor = "#78CFB0";
        taskDescription.style.textDecorationThickness = "18%";
      });
    };

    removeTask();
    checkTask();
  }
}
