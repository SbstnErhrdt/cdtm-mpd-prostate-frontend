import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-doctors-patient',
  templateUrl: './doctors-patient.component.html',
  styleUrls: ['./doctors-patient.component.scss']
})
export class DoctorsPatientComponent implements OnInit {

  patient = null;
  symptoms = null;
  symptomsAll = null;


  constructor(public api: ApiService, private route: ActivatedRoute,) {
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
    this.readPatientData();
    this.readPatientSymptomData();
  }

  readPatientData() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.api.readData("doctors/patients/" + this.route.snapshot.paramMap.get('id')).subscribe(
        data => {
          this.patient = data;
        },
        err => {
          console.error(err)
        }
      )
    }
  }

  readPatientSymptomData() {
    if (this.route.snapshot.paramMap.get('id')) {
      this.api.readData("doctors/patients/" + this.route.snapshot.paramMap.get('id') + "/symptoms").subscribe(
        data => {
          this.symptomsAll = data;
        },
        err => {
          console.error(err)
        }
      )
    }
  }

  // lineChart
  public lineChartData: Array<any> = [
    {data: [], label: 'Aggregated'},
    {data: [], label: 'By Day'},
  ];

  public blood_in_urine: Array<any> = [
    {data: [], label: 'Blood in urin'}
  ];

  public fatigue: Array<any> = [
    {data: [], label: 'Fatigue'}
  ];

  public burning_during_urination: Array<any> = [
    {data: [], label: 'Burning during urination'}
  ];
  public pain_whilst_sitting: Array<any> = [
    {data: [], label: 'Pain whilst sitting'}
  ];
  public pain_other: Array<any> = [
    {data: [], label: 'Other paon'}
  ];
  public swelling_of_feed: Array<any> = [
    {data: [], label: 'Swelling of feet'}
  ];

  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderColor: 'rgba(255,255,2555,1)',
      pointBackgroundColor: 'rgba(255,255,2555,1)',
      pointBorderColor: 'rgba(255,255,2555,1)',
      pointHoverBackgroundColor: 'rgba(255,255,2555,1)',
      pointHoverBorderColor: 'rgba(255,255,2555,1)'
    },
    {
      backgroundColor: 'rgba(150,150,150,0.2)',
      borderColor: 'rgba(150,150,150,0.2)',
      pointBackgroundColor: 'rgba(150,150,150,0.2)',
      pointBorderColor: 'rgba(150,150,150,0.2)',
      pointHoverBackgroundColor: 'rgba(150,150,150,0.2)',
      pointHoverBorderColor: 'rgba(150,150,150,0.2)',
    },
    {
      backgroundColor: 'rgba(148,159,0,0.2)',
      borderColor: 'rgba(148,159,0,0.2)',
      pointBackgroundColor: 'rgba(148,159,0,0.2)',
      pointBorderColor: 'rgba(148,159,0,0.2)',
      pointHoverBackgroundColor: 'rgba(148,159,0,0.2)',
      pointHoverBorderColor: 'rgba(148,159,0,0.2)'
    },
    {
      backgroundColor: 'rgba(0,0,177,0.2)',
      borderColor: 'rgba(0,0,177,1)',
      pointBackgroundColor: 'rgba(0,0,177,1)',
      pointBorderColor: 'rgba(0,0,177,1)',
      pointHoverBackgroundColor: 'rgba(0,0,177,0.8)',
      pointHoverBorderColor: 'rgba(0,0,177,0.8)'
    },
  ];
  public lineChartLegend: boolean = true;

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

          if (hit._source.blood_in_urine !== null) {
            this.blood_in_urine[0].data.push(hit._source.blood_in_urine);
          } else {
            this.blood_in_urine[0].data.push(-1);
          }
          if (hit._source.fatigue !== null) {
            this.fatigue[0].data.push(hit._source.fatigue);
          } else {
            this.fatigue[0].data.push(-1);
          }
          if (hit._source.burning_during_urination !== null) {
            this.burning_during_urination[0].data.push(hit._source.burning_during_urination);
          } else {
            this.burning_during_urination[0].data.push(-1);
          }
          if (hit._source.pain_whilst_sitting !== null) {
            this.pain_whilst_sitting[0].data.push(hit._source.pain_whilst_sitting);
          } else {
            this.pain_whilst_sitting[0].data.push(-1);
          }
          if (hit._source.pain_other !== null) {
            this.pain_other[0].data.push(hit._source.pain_other);
          } else {
            this.pain_other[0].data.push(-1);
          }
          if (hit._source.swelling_of_feed !== null) {
            this.swelling_of_feed[0].data.push(hit._source.swelling_of_feed);
          } else {
            this.swelling_of_feed[0].data.push(-1);
          }

          this.lineChartLabels.push(hit._source.date);
          // console.log(hit);

        }

        this.symptoms = res;


      },
      err => {
        console.error(err)
      }
    )
  }

}
