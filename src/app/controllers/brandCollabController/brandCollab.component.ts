import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BrandCollabDetails } from 'src/app/modal/subComp';
declare var $: any;

@Component({
  selector: 'app-brandCollab',
  templateUrl: './brandCollab.component.html',
  styleUrls: ['./brandCollab.component.css'],
  animations: []
})
export class BrandCollabComponent implements OnInit {
  loadingApp = true;
  private _jsonURL = 'assets/customJsonData/brandsCollaborated.json';
  @ViewChild('brandCollabContainer') brandCollabContainer: ElementRef;
  brandArray: BrandCollabDetails[] = [];
  constructor(private http: HttpClient) {
    this.http.get(this._jsonURL).subscribe((data: BrandCollabDetails[]) => {
      this.brandArray = data;
    });
  }

  ngOnInit() {
    this.loadingApp = false;
  }
}
