import { Component, OnInit } from '@angular/core';
import { todoservice } from '../shared/to-do/todo.service';
import { ToDo } from '../shared/to-do/toDo.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Todoservice:todoservice) {  }
    todoCount: number = 0;
  ngOnInit(): void {
    this.todoCount = this.Todoservice.getTodoCount();
    this.Todoservice.todosChanged.subscribe((todos: ToDo[]) => {
      this.todoCount = todos.length;
    })
  }

}
