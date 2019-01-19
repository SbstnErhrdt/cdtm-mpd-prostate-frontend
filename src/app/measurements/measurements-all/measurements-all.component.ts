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
    {data: [], label: 'Weight - kg'}
  ];

  public psa: Array<any> = [
    {data: [], label: 'PSA - ng/ml'}
  ];

  public ldh: Array<any> = [
    {data: [], label: 'LDH - U/L'}
  ];

  public testosterone: Array<any> = [
    {data: [], label: 'testosterone - ng/dl'}
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
        let i = res.hits.hits.length;
        console.log(i);
        while (i--) { // def is of the array item type no casting necessary
          let hit = res.hits.hits[i];

          // Weight
          if (hit._source.weight !== null) {
            this.weight[0].data.push(hit._source.weight);
          } else {
            this.weight[0].data.push(null);
          }

          // ldh
          if (hit._source.ldh !== null) {
            this.ldh[0].data.push(hit._source.ldh);
          } else {
            this.ldh[0].data.push(null);
          }

          // psa
          if (hit._source.psa !== null) {
            this.psa[0].data.push(hit._source.psa);
          } else {
            this.psa[0].data.push(null);
          }

          // testosterone
          if (hit._source.testosterone !== null) {
            this.testosterone[0].data.push(hit._source.testosterone);
          } else {
            this.testosterone[0].data.push(null);
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
