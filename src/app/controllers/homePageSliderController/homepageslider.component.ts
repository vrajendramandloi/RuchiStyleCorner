import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubComp } from 'src/app/modal/subComp';
declare var $: any;

@Component({
  selector: 'app-homepageslider-control',
  templateUrl: './homepageslider.component.html',
  styleUrls: ['./homepageslider.component.css']
})
export class HomePageSliderComponent implements OnInit {
  currentSlide = 0;
  private _jsonURL = 'assets/customJsonData/customData.json';
  subCompList: SubComp[] = [];
  constructor(private http: HttpClient) {
    this.http.get(this._jsonURL).subscribe((data: SubComp[]) => {
      this.subCompList = data;
     });
  }
  ngOnInit() {
  }
}
