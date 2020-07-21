import { Injectable } from '@angular/core';
import { PromoPanelReviewModal } from '../controllers/promoPanelController/promopanel.component';
import { HttpClient } from '@angular/common/http';
import { CarouselComponentData } from '../controllers/carouselController/carousel.component';

@Injectable({
  providedIn: 'root',
 })
export class PromotionService {
  private promotionsBannerUrl = 'assets/customJsonData/promotionsBanner.json';
  private promotionsReviewUrl = 'assets/customJsonData/promotionsReview.json';
  promoBannerList: CarouselComponentData[] = [];
  promotionsList: PromoPanelReviewModal[] = [];

  constructor(private http: HttpClient) {
    console.log('service constructor called');
    if (this.promoBannerList.length === 0) {
      this.getAllPromoBanners();
    }
    if (this.promotionsList.length === 0) {
      this.getAllPromotions();
    }
  }

  async getAllPromotions(): Promise<PromoPanelReviewModal[]> {
    if (this.promotionsList.length === 0) {
      this.promotionsList = await Promise.race([this.loadAllPromotions()]);
    }
    return this.promotionsList;
  }
  async getAllPromoBanners(): Promise<CarouselComponentData[]> {
    if (this.promoBannerList.length === 0) {
      this.promoBannerList = await Promise.race([this.loadAllPromoBanners()]);
    }
    return this.promoBannerList;
  }

  private async loadAllPromotions(): Promise<PromoPanelReviewModal[]> {
    const allPromo: PromoPanelReviewModal[] = [];
    return new Promise<PromoPanelReviewModal[]>(resolve => {
      this.http.get(this.promotionsReviewUrl).subscribe((data: PromoPanelReviewModal[]) => {
        for (let i = 0; i < data.length; i++) {
          allPromo.push(data[i]);
        }
      });
      resolve(allPromo);
    });
  }

  private async loadAllPromoBanners(): Promise<CarouselComponentData[]> {
    const allPromoBanner: CarouselComponentData[] = [];
    return new Promise<CarouselComponentData[]>((resolve, reject) => {
      this.http.get(this.promotionsBannerUrl).subscribe((data: CarouselComponentData[]) => {
        for (let i = 0; i < data.length; i++) {
          allPromoBanner.push(data[i]);
        }
        resolve(allPromoBanner);
      });
    });
  }
}
