import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { reject } from 'q';
import { VideoLogs } from '../utils/videoLogs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
 })
export class VideoLogsService  {
  private videosCollection: AngularFirestoreCollection<VideoLogs>;
  constructor();
  constructor(private afs?: AngularFirestore) {
    this.videosCollection = this.afs.collection<VideoLogs>('videologs');
  }

  fetchEntries(): Observable<VideoLogs[]> {
    console.log('Started Fetching via service and Collection');
    return  this.videosCollection.valueChanges();
  }

  public createEntry(videoLog: VideoLogs) {
    console.log('inserting video Log {}', videoLog);
    this.videosCollection.add(videoLog).then(res => {
      console.log('Video Log Response {}', res);
    }, err => reject(err));
  }
}
