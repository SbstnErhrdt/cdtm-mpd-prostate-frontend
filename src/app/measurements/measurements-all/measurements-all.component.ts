import {Component, OnInit} from '@angular/core';
import {DateService} from '../../services/date.service';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-measurements-all',
  templateUrl: './measurements-all.component.html',
  styleUrls: ['./measurements-all.component.scss']
})
export class MeasurementsAllComponent implements OnInit {

  measurements = null;


// lineChart
  public lineChartData: Array<any> = [
    {data: [], label: 'Aggregated'},
    {data: [], label: 'By Day'}
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


  constructor(private api: ApiService, private dateService: DateService) {
  }

  readData() {
    this.measurements = null;
    this.api.readData('generic/measurements-index/measurement?sort=_epoch_seconds:desc').subscribe(
      res => {

        this.measurements = res;


      },
      err => {
        console.error(err)
      }
    )
  }

  deleteData(guid) {
    this.api.deleteData('generic/measurements-index/measurement', guid).subscribe(
      res => {
        console.log(res);
        this.readData();
      },
      err => {
        console.error(err)
      },
    )
  }

  ngOnInit() {
    this.readData();
  }

}
