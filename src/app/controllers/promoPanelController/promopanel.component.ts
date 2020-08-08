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
  imageUrlList: CarouselComponentData[] = [];
  ispromoLoaded: Promise<boolean>;
  promotionsList: PromoPanelReviewModal[] = [];

  constructor() { }
  ngOnInit() {
    for (let imageUrl of this.promotionObject.promo_images) {
      if(imageUrl != null && imageUrl.trim().length != 0) {
        const carouselImg: CarouselComponentData = {
          imageUrl: imageUrl,
          imageText: "test"
        };
        this.imageUrlList.push(carouselImg);
      }
    }
    this.ispromoLoaded = Promise.resolve(true);
    console.log('Promo Panel Called');
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
