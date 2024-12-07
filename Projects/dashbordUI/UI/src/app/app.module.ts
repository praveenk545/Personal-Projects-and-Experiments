import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';  // Add this import
import { MatNativeDateModule } from '@angular/material/core';  // Add this import
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgApexchartsModule } from 'ng-apexcharts';

import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TodoprogressComponent } from './component/todoprogress/todoprogress.component';
import { PopupmodelComponent } from './component/dialog/popupmodel/popupmodel.component';
import { TodolistComponent } from './component/todolist/todolist.component';

// class CustomErrorHandler implements ErrorHandler {
//   handleError(error: any): void {
//     console.log('An error occurred', error);
//   }
// }

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TodoprogressComponent,
    PopupmodelComponent,
    TodolistComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,  // Add this import
    MatNativeDateModule,  // Add this import
    FormsModule,
    HttpClientModule,
    RouterModule,
    FontAwesomeModule,
    NgApexchartsModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
