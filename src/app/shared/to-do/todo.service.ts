import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";
import { ToDo } from "./toDo.model";

@Injectable ({providedIn: "root"})

export class todoservice {
  todosChanged = new Subject<ToDo[]>();

  private todos: ToDo [] = [{
    chore: 'math'
  },
  {
    chore: 'coding'
  }

]

getTodos(){
  return this.todos.slice();
}

getTodoCount(){
  return this.todos.length;
}

addTodos(newtodos: ToDo){
  this.todos.push(newtodos);
  this.todosChanged.next(this.getTodos());
}

removeTodo(index: number){
  this.todos.splice(index, 1);
  this.todosChanged.next(this.getTodos());
}
}

