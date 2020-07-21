import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { reject } from 'q';
import { Observable } from 'rxjs';
import { Blogs } from '../modal/blogs';
import { WhatsAppReg } from '../modal/whatsAppReg';

@Injectable({
  providedIn: 'root',
 })
export class WhatsAppNotificationService {
  private itemCollection: AngularFirestoreCollection<WhatsAppReg>;

  constructor();
  constructor(private afs?: AngularFirestore) {
    this.itemCollection = this.afs.collection<WhatsAppReg>('whatsAppReg');
  }

  fetchEntries(): Observable<WhatsAppReg[]> {
    console.log('Started Fetching via service and Collection');
    return  this.itemCollection.valueChanges();
  }

  public createNewEntry(item: WhatsAppReg): Promise<void> {
    console.log('inserting Blog Log {}', item);
    const docId = 'MOB_' + item.mobileNum;
    return this.itemCollection.doc(docId).set(item);
  }
}
