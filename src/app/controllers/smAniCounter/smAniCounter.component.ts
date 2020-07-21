import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-smAniCounter',
  templateUrl: './smAniCounter.component.html',
  styleUrls: ['./smAniCounter.component.css'],
  animations: [
  ]
})
export class SmAniCounterComponent implements OnInit {
  constructor() {
    $(window).scroll(function() {
      const windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".smGroup").each(function() {
        const objectBottom = $(this).offset().top + $(this).outerHeight();
        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {$(this).fadeTo(500, 1); }
        } else { //object goes out of view (scrolling up)
          if ($(this).css("opacity")==1) {$(this).fadeTo(500, 0); }
        }
      });
    });
  }

  ngOnInit() {
  }
}
