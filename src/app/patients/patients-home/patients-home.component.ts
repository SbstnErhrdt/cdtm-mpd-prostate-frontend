import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-patients-home',
  templateUrl: './patients-home.component.html',
  styleUrls: ['./patients-home.component.scss']
})
export class PatientsHomeComponent implements OnInit {

  constructor(public app: AppService) { }

  ngOnInit() {
  }

}
