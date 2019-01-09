import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-doctors-patient',
  templateUrl: './doctors-patient.component.html',
  styleUrls: ['./doctors-patient.component.scss']
})
export class DoctorsPatientComponent implements OnInit {

  patient = null;

  symptoms = null;

  constructor(private api: ApiService) {
  }

  ngOnInit() {

    this.patient = {
      _id: "patient1@cdtm.de",
      first_name: "Tristan",
      last_name: "Testerman",
      age: 75,
      stage: 2,
      remarks: "Needs a cab home.",
      image_url: this.api.getBackendUrl() + "/userimages/1.jpg"
    };

    this.readSymptomsData();
  }

  // lineChart
  public lineChartData: Array<any> = [
    {data: [], label: 'Aggregated'},
    {data: [], label: 'By Day'},
    {data: [], label: 'Blood in urine'},
    {data: [], label: 'Fatigue'}
  ];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderColor: 'rgba(255,255,2555,1)',
      pointBackgroundColor: 'rgba(255,255,2555,1)',
      pointBorderColor: 'rgba(255,255,2555,1)',
      pointHoverBackgroundColor: 'rgba(255,255,2555,1)',
      pointHoverBorderColor: 'rgba(255,255,2555,1)'
    },
    { // grey
      backgroundColor: 'rgba(150,150,150,0.2)',
      borderColor: 'rgba(150,150,150,0.2)',
      pointBackgroundColor: 'rgba(150,150,150,0.2)',
      pointBorderColor: 'rgba(150,150,150,0.2)',
      pointHoverBackgroundColor: 'rgba(150,150,150,0.2)',
      pointHoverBorderColor: 'rgba(150,150,150,0.2)',
    },
    { // grey
      backgroundColor: 'rgba(148,159,0,0.2)',
      borderColor: 'rgba(148,159,0,0.2)',
      pointBackgroundColor: 'rgba(148,159,0,0.2)',
      pointBorderColor: 'rgba(148,159,0,0.2)',
      pointHoverBackgroundColor: 'rgba(148,159,0,0.2)',
      pointHoverBorderColor: 'rgba(148,159,0,0.2)'
    },
    { // grey
      backgroundColor: 'rgba(0,0,177,0.2)',
      borderColor: 'rgba(0,0,177,1)',
      pointBackgroundColor: 'rgba(0,0,177,1)',
      pointBorderColor: 'rgba(0,0,177,1)',
      pointHoverBackgroundColor: 'rgba(0,0,177,0.8)',
      pointHoverBorderColor: 'rgba(0,0,177,0.8)'
    },
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  readSymptomsData() {
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

          if (hit._source.blood_in_urine) {
            this.lineChartData[2].data.push(hit._source.blood_in_urine);
          } else {
            this.lineChartData[2].data.push(null);
          }

          if (hit._source.fatigue) {
            this.lineChartData[3].data.push(hit._source.fatigue);
          } else {
            this.lineChartData[3].data.push(null);
          }

          this.lineChartLabels.push(hit._source.date);
          console.log(hit);

        }

        this.symptoms = res;


      },
      err => {
        console.error(err)
      }
    )
  }

}
