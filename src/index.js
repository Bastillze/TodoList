define("toDoList", ["ToDoListDescription", "Checklist"], function () {
  "use strict";
  let toDoList = document.getElementById("actualToDoList");

  this.thingsDone = () => console.log("What I've Done");
  this.thingsToDo = () => console.log("What to do today?");

  function toDo() {
    if (thing != thingsDone) {
      thing.push(thingsToDo);
    }
  }

  let toDoQuestion = prompt("What do you want to do?");
  if ((thing = String)) {
    toDo.push(newThing);
  }

  document.appendChild("actualToDoList");
});

requirejs.config({
  baseUrl: "src",
  paths: {
    description: "ToDoListDescription",
    duedate: "ToDoListDueDate",
    notes: "ToDoListNotes",
    priority: "ToDoListPriorit",
  },
});

require(["ToDoListDescription", "Checklist"], function (
  ToDoListDescription,
  Checklist
) {});
