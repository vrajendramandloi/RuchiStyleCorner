import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeoutTrigger } from 'src/app/utils/app-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    fadeoutTrigger
  ]
})
export class AppComponent {
  loadingApp: boolean;

  constructor(private router: Router) {
    this.loadingApp = true;
    setTimeout(() => {
      console.log('hide');
      this.loadingApp = false;
    }, 1000);
  }
}
