import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { reject } from 'q';
import { VideoLogs } from '../utils/videoLogs';

@Injectable({
  providedIn: 'root',
 })
export class VideoLogsService  {
  videologs: VideoLogs[] = [];
  constructor();
  constructor(private afs?: AngularFirestore) { }

  createEntry(videoLog: VideoLogs) {
    console.log('inserting video Log {}', videoLog);
    this.afs.collection('videologs').add(videoLog).then(res => {
      console.log('Video Log Response {}', res);
    }, err => reject(err));
  }
}
