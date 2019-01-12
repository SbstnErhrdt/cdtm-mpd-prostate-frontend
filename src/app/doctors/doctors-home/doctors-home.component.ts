import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-doctors-home',
  templateUrl: './doctors-home.component.html',
  styleUrls: ['./doctors-home.component.scss']
})
export class DoctorsHomeComponent implements OnInit {

  constructor(public app : AppService) { }

  ngOnInit() {
  }

}
