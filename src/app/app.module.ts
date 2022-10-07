import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ToDoComponent } from './to-do/to-do.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoListComponent,
    ToDoFormComponent,
    ToDoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }