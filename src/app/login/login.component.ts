import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {DateService} from '../services/date.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = {};

  formdata = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  constructor(private api: ApiService, private dateSerive: DateService) {
  }

  ngOnInit() {
  }

  login(data) {
    this.api.createData('users/login', data).subscribe(
      res => {

      },
      err => {

      },
    )

  }

}
