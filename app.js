const log = console.log;

const newTaskBtn = document.querySelector(".add-task");
const inputTask = document.querySelector(".input-component");


newTaskBtn.addEventListener("click", emptyTask);

function emptyTask() {
  const isEmpty = inputTask.value === "";

  const displayAlert = isEmpty ? alert("Favor insira sua tarefa no campo abaixo. 😉") : null;

  return displayAlert;
}


