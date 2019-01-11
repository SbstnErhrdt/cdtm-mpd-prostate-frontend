import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-symptom-read',
  templateUrl: './symptom-read.component.html',
  styleUrls: ['./symptom-read.component.scss']
})
export class SymptomReadComponent implements OnInit {

  symptom = null;

  constructor(private api: ApiService, private route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.readData();
  }

  readData() {
    this.api.readData('generic/symptoms-index/symptom/'+ this.route.snapshot.paramMap.get('id')).subscribe(
      res => {
        this.symptom = res;
      },
      err => {
        console.error(err)
      }
    )
  }

}
