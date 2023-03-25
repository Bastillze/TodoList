define("toDoList", ["ToDoListDescription", "Checklist"], function () {
  "use strict";

  class Model {
    constructor() {
      this.todos = [
        { id: 1, text: "Run a marathon", complete: false },
        {
          id: 2,
          text: "join a fighting game tournament",
          complete: false,
        },
      ]
    
    addTodo(todoText) {
      const todo = {
        id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
        text: todoText,
        complete: false,
      }
    }

     this.todos.push(todo)

    }
  }

  class View {
    constructor() {}
  }

  class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }
  }

  const app = new Controller(new Model(), new View());
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
