import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {ApiService} from '../../services/api.service';
import {DateService} from '../../services/date.service';

@Component({
  selector: 'app-medication-all',
  templateUrl: './medication-all.component.html',
  styleUrls: ['./medication-all.component.scss']
})
export class MedicationAllComponent implements OnInit {

  date = null;
  patient = null;
  medication = null;

  constructor(private app: AppService, private api: ApiService, private dateService: DateService) {
  }

  ngOnInit() {
    this.readPatientData();
    this.date = this.dateService.getNowYYYYMMDD();
  }

  readPatientData() {
    this.patient = null;
    this.medication = null;
    console.log(this.app.activeUser);
    if (this.app.activeUser && this.app.activeUser.identity && this.app.activeUser.identity.id) {
      this.api.readData("generic/users-index/user/" + this.app.activeUser.identity.id).subscribe(
        data => {
          this.medication = [];
          this.patient = data;

          let meds = data._source.medication;

          for (let i = 0; i < meds.length; i++) {
            let take = meds[i].take.split("-");

            let med = {
              name: meds[i].name,
              short_name: meds[i].short_name,
              morning: take[0],
              noon: take[1],
              evening: take[2],
              night: take[3],
            };

            this.medication.push(med);

          }

        },
        err => {
          console.error(err)
        }
      )
    }
  }

}
