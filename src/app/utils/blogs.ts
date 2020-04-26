import { Timestamp } from 'rxjs';
import { firestore } from 'firebase';

export interface Blogs {
  blogTitle: string;
  blogAuthor: string;
  blogDateTime: firestore.Timestamp;
  blogThumbnail: string;
  blogText: string;
}
