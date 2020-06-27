import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blogs } from '../modal/blogs';
import { TestModal } from '../utils/TestModal';
import { firestore } from 'firebase';

@Injectable({
  providedIn: 'root',
 })
export class TestService {
  blogsListMap: Map<string, Blogs[]> = new Map<string, Blogs[]>();
  mostReadBlogs: Blogs[] = [];
  inspirationalBlogs: Blogs[] = [];
  realIncidentsBlogs: Blogs[] = [];
  romanticBlogs: Blogs[] = [];

  imagesArray: string[] = ['https://www.w3schools.com/howto/img_nature.jpg',
                            'https://www.w3schools.com/howto/img_snow.jpg',
                            'https://www.w3schools.com/howto/img_forest.jpg',
                            'https://www.w3schools.com/w3images/team1.jpg',
                            'https://www.w3schools.com/w3images/team3.jpg',
                            'https://www.w3schools.com/w3images/team2.jpg'];
  blogGener: string[] = ['Most Read', 'Inspirational', 'Real Incidents', 'Romantic' ];
  constructor(private httpClient: HttpClient) {
    if (this.blogsListMap.size === 0) {
      this.getBlogsMap();
    }
  }

  async getBlogsMap(): Promise<Map<string, Blogs[]>> {
    if (this.blogsListMap.size !== 0) {
      return this.blogsListMap;
    }
    const blogsArray = await Promise.race([this.loadAllBlogs()]);
    blogsArray.filter(blog => {
      switch (blog.blogGenere) {
        case this.blogGener[0]:
          this.mostReadBlogs.push(blog);
          break;
        case this.blogGener[1]:
          this.inspirationalBlogs.push(blog);
          break;
        case this.blogGener[2]:
          this.realIncidentsBlogs.push(blog);
          break;
        case this.blogGener[3]:
          this.romanticBlogs.push(blog);
          break;
      }
    });
    const maxAllowedArraySize: number = 10;
    this.blogsListMap.set(this.blogGener[0], this.mostReadBlogs.slice(0, maxAllowedArraySize));
    this.blogsListMap.set(this.blogGener[1], this.inspirationalBlogs.slice(0, maxAllowedArraySize));
    this.blogsListMap.set(this.blogGener[2], this.realIncidentsBlogs.slice(0, maxAllowedArraySize));
    this.blogsListMap.set(this.blogGener[3], this.romanticBlogs.slice(0, maxAllowedArraySize));
    return this.blogsListMap;
  }

  private async loadAllBlogs(): Promise<Blogs[]> {
    const allBlogs: Blogs[] = [];
    return new Promise<Blogs[]>((resolve, reject) => {
      this.httpClient.get('http://jsonplaceholder.typicode.com/comments')
      .subscribe((response: TestModal[]) => {
        for (let i = 1; i <= response.length; i++) {
          try {
            const newBlog: Blogs = {
              blogTitle: response[i].name,
              blogAuthor: response[i].email,
              blogLikes: 200,
              blogDislikes: 10,
              blogViews: 5000,
              blogGenere: this.generateRandomGenere(),
              blogDateTime: firestore.Timestamp.fromDate(new Date()),
              blogThumbnail: this.generateRandomImage(),
              blogText: response[i].body + response[i].body + response[i].body + response[i].body
                        + response[i].body + response[i].body + response[i].body + response[i].body
                        + response[i].body + response[i].body + response[i].body + response[i].body
            };
            allBlogs.push(newBlog);
          } catch (error) {
            console.log('INVALID ENTRY TO ADD TO LIST MAP');
          }
        }
        resolve(allBlogs);
      });
    });
  }

  generateRandomImage(): string {
    const randomNum = Math.floor(Math.random() * this.imagesArray.length);
    return this.imagesArray[randomNum];
  }

  generateRandomGenere(): string {
    const randomNum = Math.floor(Math.random() * this.blogGener.length);
    return this.blogGener[randomNum];
  }
}
