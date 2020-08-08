import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/service/Promotions.service';
import { CarouselComponentData } from '../carouselController/carousel.component';
import { PromoPanelReviewModal } from '../promoPanelController/promopanel.component';
import { DisplayDialogUtils } from 'src/app/dialog/displayDialogUtils';

@Component({
  selector: 'app-promotions-control',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  loadingApp = true;
  imagesList: CarouselComponentData[] = [];
  productTypes: string[] = ['All', 'Hair Care', 'Skin Care', 'Fashion', 'Life Style', 'Kitchen', 'Health', 'New Products'];
  allPromotionsList: PromoPanelReviewModal[] = [];
  promotionsList: PromoPanelReviewModal[] = [];
  promoListLoaded: Promise<boolean>;
  constructor(private promotionsService: PromotionService, private displayDialog: DisplayDialogUtils) {
    //this.extractAllProductTypes();
  }
  ngOnInit() {
    this.promotionsService.getAllPromoBanners().then(data => {
      this.imagesList = data;
    });
    this.promotionsService.getAllPromotions().then(data => {
      this.promotionsList = data;
      this.allPromotionsList = data;
      this.promoListLoaded = Promise.resolve(true);
    });
  }
  /* extractAllProductTypes() {
    this.productTypes.push('All');
    this.productTypes.push('Hair Care');
    this.productTypes.push('Skin Care');
    this.productTypes.push('Fashion');
    this.productTypes.push('Life Style');
    this.productTypes.push('Kitchen');
    this.productTypes.push('Health');
    this.productTypes.push('New Products');
  } */
  selectedCategory(text: string) {
    if (text === null || text.trim().length === 0 || text.toUpperCase() === 'ALL') {
      this.promotionsList = this.allPromotionsList;
      document.getElementById('productGenerHeading').innerHTML = 'All Products';
      return;
    }
    document.getElementById('productGenerHeading').innerHTML = text;
    this.searchFilter(text);
  }
  searchFilter(text: string) {
    if (text === null || text.trim().length === 0) {
      this.promotionsList = this.allPromotionsList;
      return;
    }
    this.promotionsList = this.allPromotionsList.filter(promo => this.filterPromo(promo, text));
    if (this.promotionsList.length === 0) {
      this.promotionsList = this.allPromotionsList;
      this.displayDialog.displayMessageDialog('Filter Text not Available', 'Not Found.!');
      document.getElementById('productGenerHeading').innerHTML = 'All Products';
    }
  }

  filterPromo(promo: PromoPanelReviewModal, text: string): boolean {
    const inputArray = text.split(' ');
    for (let input of inputArray) {
      input = input.toUpperCase();
      if (promo.brand_name.toUpperCase().includes(input)) {
        return true;
      }
      if (promo.product_type.toUpperCase().includes(input)) {
        return true;
      }
      if (promo.brand_product_name.toUpperCase().includes(input)) {
        return true;
      }
    }
    return false;
  }
}
