import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-symptoms-all',
  templateUrl: './symptoms-all.component.html',
  styleUrls: ['./symptoms-all.component.scss']
})
export class SymptomsAllComponent implements OnInit {


  lineChart: any;
  symptoms: any;

  constructor(private api: ApiService) {
  }

  readData() {
    this.api.readData('generic/symptoms-index/symptom').subscribe(
      res => {
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

    this.lineChart = new Chart('line-chart', {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        datasets: [
          {
            label: 'Beiträge',
            data: [2, 3, 5, 7, 11, 13, 21, 25, 38, 48, 67, 94]
          },
          {
            label: 'Teilnehmer',
            data: [1, 1, 1, 2, 3, 5, 8, 10, 18, 21, 50, 75]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Aktivität über Zeit'
        }
      }
    });
    this.readData();

  }

}
