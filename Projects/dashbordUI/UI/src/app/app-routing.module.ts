import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TodoprogressComponent } from './component/todoprogress/todoprogress.component';
import { TodolistComponent } from './component/todolist/todolist.component';



const routes: Routes = [
    {path:'dashboard',component:DashboardComponent},
    {path:'todo_progress',component:TodoprogressComponent},
    {path:'todo_list',component:TodolistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
