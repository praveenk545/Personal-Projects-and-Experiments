import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import { ApexNonAxisChartSeries, ApexResponsive, ApexChart } from 'ng-apexcharts';
import { faTornado } from '@fortawesome/free-solid-svg-icons';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;  // Ensure this is always a valid ApexChart object
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-todoprogress',
  templateUrl: './todoprogress.component.html',
  styleUrls: ['./todoprogress.component.css'],
})
export class TodoprogressComponent {
  @ViewChild('chart') chart!: ChartComponent;
  icons={faTornado};
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
}
