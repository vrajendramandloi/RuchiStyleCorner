import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { reject } from 'q';
import { VideoLogs } from '../utils/videoLogs';
import { Observable } from 'rxjs';
import { Blogs } from '../utils/blogs';

@Injectable({
  providedIn: 'root',
 })
export class BLogsService  {
  private itemCollection: AngularFirestoreCollection<Blogs>;
  constructor();
  constructor(private afs?: AngularFirestore) {
    this.itemCollection = this.afs.collection<Blogs>('blogs');
  }

  fetchEntries(): Observable<Blogs[]> {
    console.log('Started Fetching via service and Collection');
    return  this.itemCollection.valueChanges();
  }

  public createEntry(item: Blogs) {
    console.log('inserting Blog Log {}', item);
    this.itemCollection.add(item).then(res => {
      console.log('Blog Response {}', res);
    }, err => reject(err));
  }
}
