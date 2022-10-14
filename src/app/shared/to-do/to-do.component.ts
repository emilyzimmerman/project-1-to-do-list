import { Component, Input, OnInit } from '@angular/core';
import { ToDo } from './toDo.model';
import { todoservice } from './todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
@Input() todoFromShared: ToDo = {
  chore: ''

}

  @Input() idx: number;
  constructor(
    private todoservice: todoservice
  ) { }

  ngOnInit(): void {
  }

  onRemoveTodo(){
  this.todoservice.removeTodo(this.idx);
  }

}
