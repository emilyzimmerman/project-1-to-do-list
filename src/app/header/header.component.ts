import { Component, OnInit } from '@angular/core';
import { todoservice } from '../shared/to-do/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private Todoservice:todoservice) { } //note to Emily: subscribe obersver (aka header)

  ngOnInit(): void {
  }

}
