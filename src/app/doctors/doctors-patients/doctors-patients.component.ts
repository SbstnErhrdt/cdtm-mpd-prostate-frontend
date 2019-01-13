import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-doctors-patients',
  templateUrl: './doctors-patients.component.html',
  styleUrls: ['./doctors-patients.component.scss']
})
export class DoctorsPatientsComponent implements OnInit {

  constructor(public api: ApiService) {
  }

  patients = null;


  ngOnInit() {

    this.api.readData("doctors/patients").subscribe(
      data => {
        this.patients = data;
      },
      err => {
        console.log(err)
      }
    );

    // this.patients = [
    //   {
    //     _id: "patient1@cdtm.de",
    //     first_name: "Tristan",
    //     last_name: "Testerman",
    //     age: 75,
    //     stage: 2,
    //     remarks: "Needs a cab home.",
    //     image_url: this.api.getBackendUrl() + "/userimages/1.jpg"
    //   },
    //   {
    //     _id: "patient1@cdtm.de",
    //     first_name: "Harlod",
    //     last_name: "Meme Guy",
    //     age: 78,
    //     stage: 3,
    //     remarks: "Forgets his appointments.",
    //     image_url: this.api.getBackendUrl() + "/userimages/2.jpg"
    //   },
    // ]
  }

}
