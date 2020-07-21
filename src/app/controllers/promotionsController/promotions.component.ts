import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/service/Promotions.service';
import { CarouselComponentData } from '../carouselController/carousel.component';
import { PromoPanelReviewModal } from '../promoPanelController/promopanel.component';

@Component({
  selector: 'app-promotions-control',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  loadingApp = true;
  imagesList: CarouselComponentData[] = [];
  promotionsList: PromoPanelReviewModal[] = [];
  promoListLoaded: Promise<boolean>;
  constructor(private promotionsService: PromotionService) { }
  ngOnInit() {
    this.promotionsService.getAllPromoBanners().then(data => {
      this.imagesList = data;
    });
    this.promotionsService.getAllPromotions().then(data => {
      this.promotionsList = data;
      this.promoListLoaded = Promise.resolve(true);
    });
  }
}
