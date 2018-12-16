import {Component, AfterViewInit, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Chart} from 'chart.js';
import {ApiService} from '../../services/api.service';
import {count} from 'rxjs/internal/operators';
import {DateService} from '../../services/date.service';

@Component({
  selector: 'app-symptoms-all',
  templateUrl: './symptoms-all.component.html',
  styleUrls: ['./symptoms-all.component.scss']
})
export class SymptomsAllComponent implements OnInit {

  // Variables
  currentMonth: number;
  currentYear: number;

  previousMonth: number;
  previousYear: number;

  symptomsMap = {};

  public setDate() {
    let today = new Date();

    this.currentMonth = today.getMonth();

    this.currentYear = today.getFullYear();

    let lastMonthDate = new Date();
    lastMonthDate.setDate(1);
    lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);

    this.previousMonth = lastMonthDate.getMonth();
    this.previousYear = lastMonthDate.getFullYear();
  }


  symptoms = null;


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

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

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
    this.symptoms = null;
    this.api.readData('generic/symptoms-index/symptom?sort=_epoch_seconds:desc').subscribe(
      res => {

        let countOverall = 0;
        let i = res.hits.hits.length;
        console.log(i);
        while (i--) { // def is of the array item type no casting necessary
          let hit = res.hits.hits[i];
          countOverall += hit._source.overall;
          this.lineChartData[0].data.push(countOverall);
          this.lineChartData[1].data.push(hit._source.overall);
          this.lineChartLabels.push(hit._source.date);

          if (hit._source.date) {
            this.symptomsMap[this.dateService.getYYYYMMDD(hit._source.date)] = hit._source;
          }


        }

        this.symptoms = res;


      },
      err => {
        console.error(err)
      }
    )
  }

  deleteData(guid) {
    this.api.deleteData('generic/symptoms-index/symptom', guid).subscribe(
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
    this.setDate();
  }

}
