import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ToDo } from '../shared/to-do/toDo.model';
import { todoservice } from '../shared/to-do/todo.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {
  @ViewChild('actionInputRef')
  actionInputRef!: ElementRef; //comeback to

  constructor(private todoclass: todoservice) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const todoAction = this.actionInputRef.nativeElement.value;
    const newTodo = new ToDo(todoAction);
    console.log(newTodo);
    this.todoclass.addTodos(newTodo);
  }
}
