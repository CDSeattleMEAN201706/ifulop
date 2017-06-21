import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent {
  messages = [
    {text: "some text", owner: "Tim"}, 
    {text: "more text", owner: "Jessie"}
    ];
}
