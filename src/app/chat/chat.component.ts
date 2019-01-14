import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AppService} from '../services/app.service';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages = [];

  formdata = new FormGroup({
    message: new FormControl(""),
  });

  constructor(public api: ApiService, private dataService: DataService, private app: AppService) {
  }


  ngOnInit() {
    this.dataService.messages.subscribe(msg => {
      let message = {
        message: msg.message,
        name: this.app.activeUser.identity.name,
        image_url: this.app.activeUser.identity.image_url,
      };
      this.messages.push(message)
    })
  }

  sendMessage(msg) {
    this.dataService.sendMsg(msg);
    this.formdata.reset();
  }

}
