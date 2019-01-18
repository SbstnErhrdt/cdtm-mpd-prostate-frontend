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

  public weight: Array<any> = [
    {data: [], label: 'Weight'}
  ];
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

        let countOverall = 0;
        let i = res.hits.hits.length;
        console.log(i);
        while (i--) { // def is of the array item type no casting necessary
          let hit = res.hits.hits[i];
          countOverall += hit._source.overall;
          this.lineChartData[0].data.push(countOverall);
          this.lineChartData[1].data.push(hit._source.overall);

          // Weight
          if (hit._source.weight !== null) {
              this.weight[0].data.push(hit._source.weight);
          } else {
            this.weight[0].data.push(null);
          }

          this.lineChartLabels.push(hit._source.date);
          // console.log(hit);

        }


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
