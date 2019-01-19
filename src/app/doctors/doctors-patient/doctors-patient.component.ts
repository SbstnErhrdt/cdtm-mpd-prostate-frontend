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
  measurements = null;
  measurementsAll = null;


  constructor(public api: ApiService, private route: ActivatedRoute,) {
  }

  ngOnInit() {

    this.readSymptomsData();
    this.readPatientData();
    this.readPatientSymptomData();
    this.readPatientMeasurementsData();
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

  readPatientMeasurementsData() {
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

          this.lineChartMeasurementsLabels.push(hit._source.date);
          // console.log(hit);

        }

        this.measurements = res;


      },
      err => {
        console.error(err)
      }
    )
  }

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

  public lineChartMeasurementsLabels: Array<any> = [];

  // lineChart
  public lineChartData: Array<any> = [
    {data: [], label: 'Aggregated'},
    {data: [], label: 'By Day'},
  ];

  public fever: Array<any> = [
    {data: [], label: 'Fever'}
  ];

  public weight_loss: Array<any> = [
    {data: [], label: 'Weight loss'}
  ];

  public night_sweats: Array<any> = [
    {data: [], label: 'Night Sweats'}
  ];

  public blood_in_urine: Array<any> = [
    {data: [], label: 'Blood in urine'}
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
    {data: [], label: 'Other pain'}
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

          // Fever
          if (hit._source.fever !== null) {
            if(hit._source.fever === "YES") {
              this.fever[0].data.push(1);
            } else {
              this.fever[0].data.push(0);
            }
          } else {
            this.fever[0].data.push(-1);
          }

          // weight loss
          if (hit._source.weight_loss !== null) {
            this.fever[0].data.push(hit._source.weight_loss);
          } else {
            this.fever[0].data.push(-1);
          }

          // Fever
          if (hit._source.night_sweats !== null) {
            if(hit._source.night_sweats === "YES") {
              this.night_sweats[0].data.push(1);
            } else {
              this.night_sweats[0].data.push(0);
            }
          } else {
            this.night_sweats[0].data.push(-1);
          }

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
