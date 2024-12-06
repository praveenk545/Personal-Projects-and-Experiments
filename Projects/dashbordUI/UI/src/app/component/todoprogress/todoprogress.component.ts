import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from 'ng-apexcharts';
import { faTornado,faListCheck, } from '@fortawesome/free-solid-svg-icons';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;  // Ensure this is always a valid ApexChart object
  responsive: ApexResponsive[];
  labels: any;
};
export interface PriorityLevel{
  medium:string
  easy:string|any
  high:string
}
@Component({
  selector: 'app-todoprogress',
  templateUrl: './todoprogress.component.html',
  styleUrls: ['./todoprogress.component.css'],
})
export class TodoprogressComponent {
  @ViewChild('chart') chart!: ChartComponent;
  icons={faTornado,faListCheck};
  Level:PriorityLevel={
    easy:"low priority",
    medium:"important but not urgent",
    high:"urgent and important",
  }
  public chartOptions: Partial<ChartOptions>|any = {
    series: [44, 55, 13, 43, 22],
    chart: {
      type: 'donut', // This must always be a valid ApexChart object
      height: 250,   // You can include other properties if needed
      width:300
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    text:'#fff',
    responsive: [],  // Default to an empty array if no responsive is set
  };

  constructor() {
    // You can modify `chartOptions` later in the constructor or lifecycle hooks
    // For example, dynamically changing `chart` properties
    this.chartOptions.chart = {
      type: 'donut',
      height: 220,  // Ensure the chart is always a valid ApexChart object
      width:350,
    };
  }
  // methods for Tasks
 
  public viewTaskForm=new FormGroup({
    taskName: new FormControl('', [Validators.required]), 
    description: new FormControl('', [Validators.maxLength(500)]), 
    dueDate: new FormControl('', [Validators.required]), 
    priority: new FormControl('low', [Validators.required]), 
    status: new FormControl('not-started', [Validators.required]),  
    tags: new FormControl('', []), 
    assignedUser: new FormControl('', [Validators.required]),
    estimatedTime: new FormControl('', [Validators.pattern(/^[0-9]*$/)]), 
    completionDate: new FormControl('', []), 
    attachments: new FormControl('', []),  
    comments: new FormControl('', []), 
   // more:new FormArray([])
  })
  viewTaskList(){

  }
}
