import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  addNewMessage(msg: string) {
    this.messages.push(msg);
    console.log(msg)
  }

}
