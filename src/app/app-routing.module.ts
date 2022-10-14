import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ToDoFormComponent } from "./to-do-form/to-do-form.component";
import { ToDoListComponent } from "./to-do-list/to-do-list.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/todo-form', pathMatch:'full'},
  { path:'todo-list', component: ToDoListComponent},
  { path: 'todo-form', component: ToDoFormComponent },

]

@NgModule ({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})
export class AppRoutingModule {

}
