define("toDoList", [ToDoList, Description, Checklist], function () {
  "use strict";
  let toDoList = document.getElementById("actualToDoList");

  this.thingsDone = () => console.log("What I've Done");
  this.thingsToDo = () => console.log("What to do today?");

  function toDo() {
    if (thing != thingsDone) {
      thing.push(thingsToDo);
    }
  }

  let toDo = prompt("What do you want to do?");
  if ((thing = String)) {
    toDo.push(newThing);
  }

  document.appendChild("actualToDoList");
})();

requirejs.config({
  baseUrl: "src",
  paths: {
    description: "ToDoListDescription.js",
    duedate: "ToDoListDueDate.js",
    notes: "ToDoListNotes.js",
    priority: "ToDoListPriorit.js",
  },
});
