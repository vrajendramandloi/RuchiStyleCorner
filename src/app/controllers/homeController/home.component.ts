import { Component } from '@angular/core';
declare var $: any;
declare var InstagramFeed: any;
import '../../../assets/js/InstagramFeed.min.js';

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
    $(window).on('load', function(){
      new InstagramFeed({
        'username': 'ruchiStylecorner',
        'container': document.getElementById("instagram-header"),
        'display_profile': true,
        'display_biography': true,
        'display_gallery': false,
        'styling': true,
        'lazy_load': true
      });
      new InstagramFeed({
        'username': 'ruchiStylecorner',
        'container': document.getElementById("instagram-feed1"),
        'display_profile': false,
        'display_biography': false,
        'display_gallery': true,
        'callback': null,
        'styling': true,
        'items': 30,
        'items_per_row': 2,
        'image_size': 200,
        'margin': 0.5,
        'lazy_load': true
      });
    });
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
