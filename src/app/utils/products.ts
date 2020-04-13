import { Timestamp } from 'rxjs';
import { firestore } from 'firebase';

export interface Products {
  productImg: string;
  productName: string;
  productDesc: string;
  productPrice: number;
  productRemainingQty: number;
  productTotalQty: number;
  productDateTime: firestore.Timestamp;
}
