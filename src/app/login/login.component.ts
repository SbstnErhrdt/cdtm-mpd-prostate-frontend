import {Component, OnInit} from '@angular/core';
import {ApiService} from '../services/api.service';
import {DateService} from '../services/date.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from "@angular/router"
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = {};

  state = {
    loading: false,
    success: null,
    fail: null,
  };

  formdata = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
  });

  constructor(private app: AppService, private api: ApiService, private dateSerive: DateService, private router: Router) {
  }

  ngOnInit() {
    if (this.app.activeUser !== null) {
      this.router.navigate(['/patients']);
    }
  }

  login(data) {
    this.state = {
      loading: false,
      success: null,
      fail: null,
    };

    this.api.createData('users/login', data).subscribe(
      res => {
        console.log(res);
        if (res['access_token']) {
          localStorage.setItem("access_token", res['access_token'])
          this.app.setActiveUser();
        }
        this.router.navigate(['/patients'])
      },
      err => {
        console.log(err);
        this.state.fail = err.msg || "Could not login";
      },
    )

  }

}
