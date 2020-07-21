import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { CarouselComponentData } from '../carouselController/carousel.component';

@Component({
  selector: 'app-promopanel',
  templateUrl: './promopanel.component.html',
  styleUrls: ['./promopanel.component.css']
})
export class PromoPanelComponent implements OnInit {
  @Input() promotionObject: PromoPanelReviewModal;
  promoPanelImageList: CarouselComponentData[] = [];
  ispromoLoaded: Promise<boolean>;
  promotionsList: PromoPanelReviewModal[] = [];

  constructor() {}
  ngOnInit() {
    this.promoPanelImageList = [];
    for (let i=0; i < this.promotionObject.promo_images.length; i++) {
      const carouselImg: CarouselComponentData = {
        imageUrl: this.promotionObject.promo_images[i]
      };
      this.promoPanelImageList.push(carouselImg);
    }
    this.ispromoLoaded = Promise.resolve(true);
  }
}

export interface PromoPanelReviewModal {
  promo_images: string[];
  brand_name: string;
  brand_product_name: string;
  product_type: string;
  stars: string;
  reviewDate: string;
  reviewNote: string;
  reviewBy: string;
  buyLinks: NewBuylinks[];
  newLaunch: boolean;
  lovedByPeople: boolean;
}

export interface NewBuylinks {
  linkName: string;
  link: string;
  promocode: string;
  discount: string;
}
