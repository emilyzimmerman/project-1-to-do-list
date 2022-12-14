import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ToDoComponent } from './shared/to-do/to-do.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoListComponent,
    ToDoFormComponent,
    ToDoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
