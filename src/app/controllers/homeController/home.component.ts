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

  scrollToBottom() {
    $('html,body').animate({scrollTop: document.body.scrollHeight}, 'slow');
  }
}
