import { Timestamp } from 'rxjs';
import { firestore } from 'firebase';

export interface VideoLogs {
  vlogIndex: number;
  vlogTitle: string;
  vlogLink: string;
  vlogGenere: string;
  vlogDateTime: firestore.Timestamp;
}
