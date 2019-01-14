import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-medication-button',
  templateUrl: './medication-button.component.html',
  styleUrls: ['./medication-button.component.scss']
})
export class MedicationButtonComponent implements OnInit {

  state = "loading";

  @Input('patientID') patientID: string;
  @Input('date') date: string;
  @Input('medi') medi: string;
  @Input('time') time: string;
  @Input('amount') amount: string;


  constructor(private api: ApiService, private app: AppService) {
  }

  getKey() {
    return this.patientID + "-" + this.date + "-" + this.medi + "-" + this.time;
  }

  ngOnInit() {
    console.log(this.getKey())
    this.readData();
  }

  readData() {
    this.state = 'loading';
    if (this.patientID && this.date && this.medi && this.time) {
      this.api.readData("generic/medication-index/medi/" + this.getKey()).subscribe(
        data => {
          this.state = "taken";
        },
        err => {
          console.log(err);
          this.state = "totake";
        })
    } else {

    }
  }

  take() {
    this.state = 'loading';
    this.api.createData("generic/medication-index/medi/" + this.getKey(), {
      'taken': new Date()
    }).subscribe(
      data => {
        this.readData();
      },
      err => {
        console.log(err);
        this.state = "totake";
      })
  }


}
