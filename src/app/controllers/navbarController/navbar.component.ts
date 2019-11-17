import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component ({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  ngOnInit() {
    $(document).ready(function(){
      $('.navbar-toggle a').click(function() {
        $('.navbar-menu').toggleClass('active');
      });
      $('.navbar-menu ul li a').click(function() {
        $('.navbar-menu').toggleClass('active');
      });
    });
  }
}
