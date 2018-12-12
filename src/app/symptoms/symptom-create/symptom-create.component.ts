import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-symptom-create',
  templateUrl: './symptom-create.component.html',
  styleUrls: ['./symptom-create.component.scss']
})
export class SymptomCreateComponent implements OnInit {

  constructor(private api: ApiService) {
  }

  formdata: any;

  data = {
    'hello': 'seb'
  };

  date: string = "01/02/2015";

  create(data) {
    this.api.createData('generic/symptoms-index/symptom', data).subscribe(
      res => {
        console.log(res)
      },
      err => {
        console.error(err)
      },
    )
  }

  ngOnInit() {
    // this.create(this.data);

    this.formdata = new FormGroup({
      overall: new FormControl(0),
      date: new FormControl("12/14/2018"),
      note: new FormControl(""),
    });

  }


}
