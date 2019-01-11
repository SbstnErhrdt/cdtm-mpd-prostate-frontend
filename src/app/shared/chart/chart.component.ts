import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  // lineChart
  @Input('chartData') lineChartData: Array<any>;
  @Input('chartLabels') lineChartLabels: Array<any>;
  @Input('chartOptions') lineChartOptions: any;
  @Input('chartColors') lineChartColors: Array<any>;
  @Input('chartLegend') lineChartLegend: boolean;
  @Input('chartType') lineChartType: string;

  constructor() {
  }

  ngOnInit() {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
