import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { reject } from 'q';
import { VideoLogs } from '../utils/videoLogs';
import { Observable } from 'rxjs';
import { Products } from '../utils/products';

@Injectable({
  providedIn: 'root',
 })
export class ProductsService  {
  private itemCollection: AngularFirestoreCollection<Products>;
  constructor();
  constructor(private afs?: AngularFirestore) {
    this.itemCollection = this.afs.collection<Products>('products');
  }

  fetchEntries(): Observable<Products[]> {
    console.log('Started Fetching via service and Collection');
    return  this.itemCollection.valueChanges();
  }

  public createEntry(item: Products) {
    console.log('inserting Products {}', item);
    this.itemCollection.add(item).then(res => {
      console.log('Products Response {}', res);
    }, err => reject(err));
  }
}
