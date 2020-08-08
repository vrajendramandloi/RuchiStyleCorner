import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
  ]
})
export class CarouselComponent implements OnInit {
  @Input() imageUrlList: CarouselComponentData[] = [];
  @Input() imageTimer: number;
  @Input() isTextVisible: boolean;
  @Input() showArrow: boolean = true;
  @Input() showDots: boolean = true;
  isImagesListLoaded: boolean = false;
  constructor() { }
  ngOnInit() { }
}

export interface CarouselComponentData {
  imageUrl: string;
  imageText?: string;
}
