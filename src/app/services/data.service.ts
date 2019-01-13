import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/index';
import {WebsocketService} from './websockets.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private ws: WebsocketService) {
    this.messages = <Subject<any>>ws.connectChat()
  }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    this.messages.next(msg);
  }
}
