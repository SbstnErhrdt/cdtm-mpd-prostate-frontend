import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {DateService} from '../../services/date.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-measurements-create',
  templateUrl: './measurements-create.component.html',
  styleUrls: ['./measurements-create.component.scss']
})
export class MeasurementsCreateComponent implements OnInit {

  constructor(private api: ApiService, private dateSerive: DateService, private route: ActivatedRoute, private router: Router) {
  }

  formdata = new FormGroup({
    date: new FormControl(this.dateSerive.getToday()),
    weight: new FormControl(0),
    weight_loss: new FormControl(0),
    fever: new FormControl(null),
    night_sweats: new FormControl(null),
    erectile_dysfunction: new FormControl(""),
    blood_in_urine: new FormControl(null),
    fatigue: new FormControl(null),
    burning_during_urination: new FormControl(null),
    pain_whilst_sitting: new FormControl(null),
    pain_other: new FormControl(null),
    swelling_of_feed: new FormControl(null),
    bowel_habit: new FormControl(null),
    note: new FormControl(""),
  });

  state = {
    loading: false,
    success: null,
    fail: null,
  };

  resetState() {
    this.state = {
      loading: false,
      success: null,
      fail: null,
    };
  }

  createData(data) {
    this.resetState();
    this.state.loading = true;
    // Timestamp

    if (data.date) {
      data._epoch_seconds = this.dateSerive.getUnixTimeStamp(data.date);
      data._YYYYMMDD = this.dateSerive.getYYYYMMDD(data.date);
    } else {
      data._epoch_seconds = this.dateSerive.getNowUnixTime();
      data._YYYYMMDD = this.dateSerive.getNowYYYYMMDD();
    }
    // TODO remove static user
    data._user = 2;
    // Send request to backend
    console.log(data);
    this.api.createData('generic/symptoms-index/symptom', data).subscribe(
      res => {
        console.log(res);
        this.resetState();
        this.state.success = 'Saved';
        this.resetForm();
        this.router.navigate(['/patients/symptoms']);
      },
      err => {
        this.resetState();
        this.state.fail = 'An error occured \n' + JSON.stringify(err);
        console.error(err)
      },
    )
  }


  resetForm() {
    this.formdata.reset();
  }

  ngOnInit() {
    // this.create(this.data);

    console.log();
    if (this.route.snapshot.paramMap.get('date')) {
      this.formdata.controls['date'].setValue(this.route.snapshot.paramMap.get('date'))
    }

  }


  setButtonValue(key, val) {
    this.formdata.controls[key].setValue(val);
  }

}
