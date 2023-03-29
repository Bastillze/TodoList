define("toDoList", ["ToDoListDescription", "Checklist"], function () {
  class Model {
    constructor() {
      this.todos = [
        { id: 1, text: "Run a marathon", complete: false },
        {
          id: 2,
          text: "join a fighting game tournament",
          complete: false,
        },
      ];

      addTodo(todoText);
      {
        const todo = {
          id:
            this.todos.length > 0
              ? this.todos[this.todos.length - 1].id + 1
              : 1,
          text: todoText,
          complete: false,
        };
      }

      this.todos.push(todo);

      editTodo(id, updatedText);
      {
        this.todos = this.todos.map((todo) =>
          todo.id === id
            ? { id: todo.id, text: updatedText, complete: todo.complete }
            : todo
        );
      }

      deleteTodo(id);
      {
        this.todos = this.todos.filter((todo) => todo.id !== id);
      }

      toggleTodo(id);
      {
        this.todos = this.todos.map((todo) =>
          todo.id === id
            ? { id: todo.id, text: todo.text, complete: !todo.complete }
            : todo
        );
      }
    }
  }

  class View {
    constructor() {}

    createElement(tag, className) {
      const element = document.createElement(tag);
      if (className) element.classList.add(className);

      return element;
    }

    getElement(selector) {
      const element = document.querySelector(selector);

      return element;
    }
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
