import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { reject } from 'q';
import { Observable } from 'rxjs';
import { Blogs } from '../modal/blogs';

@Injectable({
  providedIn: 'root',
 })
export class BLogsService {
  private itemCollection: AngularFirestoreCollection<Blogs>;

  constructor();
  constructor(private afs?: AngularFirestore) {
    this.itemCollection = this.afs.collection<Blogs>('blogs');
  }

  fetchEntries(): Observable<Blogs[]> {
    console.log('Started Fetching via service and Collection');
    return  this.itemCollection.valueChanges();
  }

  public createNewBlogEntry(item: Blogs) {
    console.log('inserting Blog Log {}', item);
    const blogId = item.blogTitle.replace(/ /gi, '_').substring(0, 50);
    this.itemCollection.doc(blogId).set(item).then(
      res => {
        console.log('Blog Created collection created in BLOG');
        const commentId = 'comId_' + Math.round((new Date().getTime() / 1000));
        const commentsColl = {
          name: 'abcd',
          comment: 'this is a wonderful vlog'
        };
        this.itemCollection.doc(blogId).collection('comments')
        .doc(commentId).set(commentsColl).then(
          subRes => {
            console.log('sub collection created in BLOG');
          },
          err => reject(err));
      },
      err => reject(err)
    );
  }
}
