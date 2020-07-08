import { firestore } from 'firebase';

export class Blogs {
  blogTitle: string;
  blogAuthor: string;
  blogDateTime: firestore.Timestamp;
  blogThumbnail: string;
  blogText: string;
  blogLikes: number;
  blogViews: number;
  blogGenere: string;
  isNewBlog?: boolean;
}
