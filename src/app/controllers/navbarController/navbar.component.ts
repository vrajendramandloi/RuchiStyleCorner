import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component ({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit() {
    $('.toggleMenu').click( function() {
      $('ul').toggleClass('active');
    });
    $('ul li a').click(function() {
      $('ul').toggleClass('active');
    });
  }
}
