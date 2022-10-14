import { Component, OnInit, } from '@angular/core';
import { ToDo } from '../shared/to-do/toDo.model';
import { todoservice } from '../shared/to-do/todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor(private todoServiceClass: todoservice) { }
  todoList: ToDo[] = []

  ngOnInit(): void {
    this.todoList = this.todoServiceClass.getTodos();
    this.todoServiceClass.todosChanged.subscribe((todos:ToDo[])=>{
      this.todoList = todos
    });
  }

}
