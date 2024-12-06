import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { AppComponent } from './app.component';

import { BaseChartDirective, provideCharts, withDefaultRegisterables,  } from 'ng2-charts';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoprogressComponent } from './component/todoprogress/todoprogress.component';
import { NgApexchartsModule } from 'ng-apexcharts';

// import { ChartsModule } from 'ng2-charts'


 class CustomErrorHandler implements ErrorHandler{
  handleError(error: any): void {
    console.log('An error occured',error)
  }
 }

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TodoprogressComponent,

 
  ],
  imports: [
    CommonModule,
    // ChartsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
     FontAwesomeModule,
    BaseChartDirective,
    NgApexchartsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
