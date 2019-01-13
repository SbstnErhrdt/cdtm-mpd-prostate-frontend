import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {FormControl, FormGroup} from '@angular/forms';

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

  constructor(private dataService: DataService) {
  }


  ngOnInit() {
    this.dataService.messages.subscribe(msg => {
      console.log(msg);
      this.messages.push(msg)
    })
  }

  sendMessage(msg) {
    this.dataService.sendMsg(msg);
  }

}
