import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit() {
    $(document).ready(function () {
      $('.toggleMenu').click(function() {
        $('ul').toggleClass('active');
      });
      $('ul li a').click(function() {
        if ($('ul').hasClass('active')) {
          $('ul').removeClass('active');
        }
      });
    });
  }
}
