import { firestore } from 'firebase';

export interface Blogs {
  blogTitle: string;
  blogAuthor: string;
  blogDateTime: firestore.Timestamp;
  blogThumbnail: string;
  blogText: string;
  blogLikes: number;
  blogDislikes: number;
  blogViews: number;
  blogGenere: string;
}
