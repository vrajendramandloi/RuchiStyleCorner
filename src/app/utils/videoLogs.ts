import { Timestamp } from 'rxjs';
import { firestore } from 'firebase';

export interface VideoLogs {
  videoIndex: number;
  videoTitle: string;
  youtubeLink: string;
  videoGenere: string;
  uploadDateTime: firestore.Timestamp;
}
