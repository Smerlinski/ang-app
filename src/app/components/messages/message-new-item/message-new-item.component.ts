import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-new-item',
  templateUrl: './message-new-item.component.html',
  styleUrls: ['./message-new-item.component.scss']
})
export class MessageNewItemComponent implements OnInit {

  newMessage: string= '';

  constructor() { }

  ngOnInit(): void {
  }

}
