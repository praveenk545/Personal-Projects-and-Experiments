import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TodoprogressComponent } from './component/todoprogress/todoprogress.component';



const routes: Routes = [
    {path:'dashboard',component:DashboardComponent},
    {path:'todo_progress',component:TodoprogressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
