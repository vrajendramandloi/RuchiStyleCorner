import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SocialMediaDetails, SubComp } from 'src/app/modal/subComp.js';
import '../../../assets/js/InstagramFeed.min.js';
import { fadeoutTrigger } from 'src/app/utils/app-animations.js';
import { Router } from '@angular/router';
declare var $: any;
declare var InstagramFeed: any;

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fadeoutTrigger
  ]
})
export class HomeComponent {
  smdetails: SocialMediaDetails[] = [];
  loadingApp: boolean;
  constructor(private router:Router) {
    this.loadingApp = true;
    setTimeout(() => {
      this.loadingApp = false;
    }, 1000);

    $(window).on('load', function() {
      new InstagramFeed({
        'username': 'ruchistylecorner',
        'container': document.getElementById("instagram-header"),
        'display_profile': true,
        'display_biography': true,
        'display_gallery': false,
        'styling': true,
        'lazy_load': true
      });
      new InstagramFeed({
        'username': 'ruchistylecorner',
        'container': document.getElementById("instagram-feed1"),
        'display_profile': false,
        'display_biography': false,
        'display_gallery': true,
        'callback': null,
        'styling': false,
        'items': 90,
        'margin': 0.5,
        'lazy_load': true
      });
      /* $(window).scroll(function() {
        const windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".content-card").each(function() {
          const objectBottom = $(this).offset().top + $(this).outerHeight();
          if (objectBottom < windowBottom) {
            if ($(this).css("opacity")==0) {$(this).fadeTo(500, 1); }
          } else {
            if ($(this).css("opacity")==1) {$(this).fadeTo(500, 0); }
          }
        });
      }); */
    });
  }

  getItemsPerRow() {
    console.log('WIDTH is {}', $(window).width());
  }
  navigateToRegister() {
    this.router.navigate(['/aboutme'], { queryParams: { action: "whatsAppReg" }});
  }
  navigateToUrl(url) {
    window.open(url);
  }
  scrollToBottom() {
    $('html,body').animate({scrollTop: document.body.scrollHeight}, '2000');
  }
}
