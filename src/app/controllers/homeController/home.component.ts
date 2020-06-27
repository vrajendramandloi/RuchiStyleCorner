import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {

  }
  navigateToUrl(event) {
    switch (event) {
      case 'YOUTUBE': {
         window.open('https://www.youtube.com/channel/UCo1Rx0-CfOuxoTmOcjiCtHQ');
         break;
      }
      case 'INSTAGRAM': {
        window.open('https://www.youtube.com/channel/UCo1Rx0-CfOuxoTmOcjiCtHQ');
        break;
      }
      case 'TWITTER': {
        window.open('https://www.youtube.com/channel/UCo1Rx0-CfOuxoTmOcjiCtHQ');
        break;
      }
      case 'SNAPCHAT': {
        window.open('https://www.youtube.com/channel/UCo1Rx0-CfOuxoTmOcjiCtHQ');
        break;
      }
   }
  }
  scrollToBottom() {
    $('html,body').animate({scrollTop: document.body.scrollHeight}, '2000');
  }
}
