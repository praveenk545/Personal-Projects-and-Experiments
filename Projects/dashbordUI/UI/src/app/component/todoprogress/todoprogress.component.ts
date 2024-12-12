import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from 'ng-apexcharts';
import { faTornado,faListCheck, faEye} from '@fortawesome/free-solid-svg-icons';
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
  icons={faTornado,faListCheck,faEye};
  Level:PriorityLevel={
    easy:"low priority",
    medium:"important but not urgent",
    high:"urgent and important",
  }
  public chartOptions: Partial<ChartOptions>|any = {
    series: [44, 55, 13, 43, 22],
    chart: {
      type: 'donut',  // This defines the type of chart
      height: 250,
      width: 300,
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    dataLabels: {
      style: {
        colors: ['#ffffff'], // White color for the data labels (values inside the donut)
      }
    },
    title: {
      text: 'Team Distribution',  // Add title text (optional)
      style: {
        color: '#ffffff',  // White color for the title
      }
    },
    tooltip: {
      theme: 'dark', // Dark theme for tooltips to contrast with white text
      style: {
        color: '#ffffff', // White color for tooltip text
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: '100%',
          }
        }
      }
    ],
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
  isTrySubmit:boolean=false;
  public viewTaskFormView=new FormGroup({
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
  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number=5; 
  useValues:string[]|any[]=[];
  get paginatedItems() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.useValues.slice(start, end);
  }
   // Change page
   changePage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  // Get total pages
  get totalPages() {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  // Generate page numbers for pagination
  get pageNumbers() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  get hasPrevious() {
    return this.currentPage > 1;
  }

  get hasNext() {
    return this.currentPage < this.totalPages;
  }
}
