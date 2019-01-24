import {Component, Input, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {AppService} from '../../services/app.service';
import {DataService} from '../../services/data.service';

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


  constructor(private api: ApiService, private app: AppService, private dataService: DataService) {
    this.dataService.medication.subscribe(e => {
      console.log("REC", e);
      if (e.key === this.getKey() && e.state) {
        this.state = e.state;
      }
    })
  }

  getKey() {
    return this.patientID + "-" + this.date + "-" + this.medi + "-" + this.time;
  }

  ngOnInit() {
    console.log(this.getKey());
    this.readData();
  }

  readData() {
    this.state = 'loading';
    if (this.patientID && this.date && this.medi && this.time) {
      this.api.readData("generic/medication-index/medi/" + this.getKey()).subscribe(
        data => {
          this.state = "taken";
          console.log(data);
        },
        err => {
          console.log(err);
          this.state = "totake";
        })
    } else {
      console.error("Not logged in")
    }
  }

  take() {
    if (this.state === 'taken') {
      return this.untake();
    }
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

  untake() {
    this.api.deleteData("generic/medication-index/medi/" + this.getKey(), "").subscribe(
      data => {
        this.readData();
      },
      err => {
        console.log(err);
        this.state = "totake";
      })
  }


}
