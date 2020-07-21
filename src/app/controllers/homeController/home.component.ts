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
  constructor() {
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
      $(window).scroll(function() {
        const windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".content-card").each(function() {
          const objectBottom = $(this).offset().top + $(this).outerHeight();
          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            if ($(this).css("opacity")==0) {$(this).fadeTo(500, 1); }
          } else { //object goes out of view (scrolling up)
            if ($(this).css("opacity")==1) {$(this).fadeTo(500, 0); }
          }
        });
        $(".comments-title").each(function() {
          const objectBottom = $(this).offset().top + $(this).outerHeight();
          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            if ($(this).css("opacity")==0) {$(this).fadeTo(500, 1); }
          } else { //object goes out of view (scrolling up)
            if ($(this).css("opacity")==1) {$(this).fadeTo(500, 0); }
          }
        });
        $(".comment-floater").each(function() {
          const objectBottom = $(this).offset().top + $(this).outerHeight();
          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            if ($(this).css("opacity")==0) {$(this).fadeTo(500, 1); }
          } else { //object goes out of view (scrolling up)
            if ($(this).css("opacity")==1) {$(this).fadeTo(500, 0); }
          }
        });
        $(".socialMedia-title").each(function() {
          const objectBottom = $(this).offset().top + $(this).outerHeight();
          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            if ($(this).css("opacity")==0) {$(this).fadeTo(500, 1); }
          } else { //object goes out of view (scrolling up)
            if ($(this).css("opacity")==1) {$(this).fadeTo(500, 0); }
          }
        });
      });
    });
  }

  getItemsPerRow() {
    console.log('WIDTH is {}', $(window).width());
  }

  navigateToUrl(url) {
    window.open(url);
  }
  scrollToBottom() {
    $('html,body').animate({scrollTop: document.body.scrollHeight}, '2000');
  }
}
