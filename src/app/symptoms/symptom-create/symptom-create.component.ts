import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {FormControl, FormGroup} from '@angular/forms';
import {DateService} from '../../services/date.service';

@Component({
  selector: 'app-symptom-create',
  templateUrl: './symptom-create.component.html',
  styleUrls: ['./symptom-create.component.scss']
})
export class SymptomCreateComponent implements OnInit {

  constructor(private api: ApiService, private dateSerive: DateService) {
  }

  formdata = new FormGroup({
    date: new FormControl(this.dateSerive.getToday()),
    overall: new FormControl(0),
    erectile_dysfunction: new FormControl(""),
    blood_in_urine: new FormControl(null),
    fatigue: new FormControl(null),
    burning_during_urination: new FormControl(null),
    pain_whilst_sitting: new FormControl(null),
    pain_other: new FormControl(null),
    swelling_of_feed: new FormControl(null),
    weight_loss: new FormControl(0),
    bowl_habbit: new FormControl(null),
    fever: new FormControl(null),
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
  }


  setButtonValue(key, val) {
    this.formdata.controls[key].setValue(val);
  }


}
