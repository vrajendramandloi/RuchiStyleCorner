import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SocialMediaDetails, SubComp } from 'src/app/modal/subComp.js';
import '../../../assets/js/InstagramFeed.min.js';
declare var $: any;
declare var InstagramFeed: any;

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  smdetails: SocialMediaDetails[] = [];
  constructor(private http: HttpClient) {
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
        'items_per_row': 3,
        'image_size': 200,
        'margin': 0.5,
        'lazy_load': true
      });
    });
  }

  navigateToUrl(url) {
    window.open(url);
  }
  scrollToBottom() {
    $('html,body').animate({scrollTop: document.body.scrollHeight}, '2000');
  }
}
