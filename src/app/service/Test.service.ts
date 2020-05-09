import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blogs } from '../modal/blogs';
import { TestModal } from '../utils/TestModal';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root',
 })
export class TestService {
  constructor(private httpClient: HttpClient) {  }

  getBlogs(): Blogs[] {
    const blogsArray: Blogs[] = [];
    this.httpClient.get('http://jsonplaceholder.typicode.com/comments')
    .subscribe((response: TestModal[]) => {
      for (let i = 1; i <= response.length; i++) {
        const newBlog: Blogs = {
          blogTitle: response[i].name,
          blogAuthor: response[i].email,
          blogLikes: 200,
          blogDislikes: 10,
          blogDateTime: firestore.Timestamp.fromDate(new Date()),
          blogThumbnail: 'https://via.placeholder.com/150/771796',
          blogText: response[i].body + response[i].body + response[i].body + response[i].body
                    + response[i].body + response[i].body + response[i].body + response[i].body
                    + response[i].body + response[i].body + response[i].body + response[i].body
        };
        blogsArray.push(newBlog);
      }
    });
    return blogsArray;
  }
}
