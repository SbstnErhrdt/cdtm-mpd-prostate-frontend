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
    this.readData();
  }

  readData() {
    this.api.readData("doctors/patients").subscribe(
      data => {
        this.patients = data;
      },
      err => {
        console.log(err)
      }
    );

  }

  deleteData(id) {
    this.api.deleteData('generic/users-index/user', id).subscribe(
      res => {
        console.log(res);
        this.readData();
      },
      err => {
        console.error(err)
      },
    )
  }

}
