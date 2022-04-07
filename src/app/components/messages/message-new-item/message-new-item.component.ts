import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message-new-item',
  templateUrl: './message-new-item.component.html',
  styleUrls: ['./message-new-item.component.scss']
})
export class MessageNewItemComponent implements OnInit {

  newMessage: string= '';
  @Output() newMessageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  send(msg : string) {
    this.newMessageEvent.emit(msg);
    this.newMessage = '';
  }
}
