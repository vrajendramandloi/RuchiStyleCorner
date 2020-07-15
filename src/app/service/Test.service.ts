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
              blogViews: 5000,
              blogGenere: this.generateRandomGenere(),
              blogDateTime: firestore.Timestamp.fromDate(new Date()),
              blogThumbnail: this.generateRandomImage(),
              isNewBlog: this.generateRandomNumber(),
              blogText: "NEW DELHI: A “special arrangement” aerial connectivity could roll out between India and the US, France and Germany within a week. Airlines of both sides will be allowed to operate flights and carry passengers in and out of India who are eligible to do so under the home ministry rules, said people in the know."
              +"<br /><br /> It is reliably learnt that talks with US, France and Germany are at a very advanced stage and announcements could come within a week. Separately, India is in discussion with UAE also to facilitate the travel of people from here."
              +"<br /><br />India had recently spoken of creating travel corridors with US, UK, France and Germany to facilitate travel during the pandemic and till schedule flights are resumed. With the Gulf, arrangements are being to operate charter flights to allow both way travel of eligible people."
              +"<br /><br />At the moment airlines like Lufthansa, Air France and United are allowed to operate repatriation flights mainly to fly eligible people out of India. But under the special arrangement, travellers — as per the MHA travel eligibility order — will be able to fly both in and out of India on airlines of India and Germany, France and America."
              +"<br /><br />For instance, Lufthansa website says “as per the approval given by the Director General of Civil Aviation, only the following persons shall be allowed to travel on the special repatriation fights: All German and EU nationals/residents; all other foreign nationals transiting through a Lufthansa hub… and Indian nationals holding US green cards or Canadian permanent residence status are only permitted on this special repatriation flight if he/she is a spouse of US/Canadian national."
              +"<br /><br />Once this arrangement is made with other countries, their airlines will also reciprocally carry traffic in and out of India as per MHA directives. People in the know say announcements to the effect with some countries could start coming this week itself."
              +"<br /><br />Scheduled international passenger flights were suspended on March 22 and are for now not allowed till the month-end except on certain routes that the government may specifically allow. Air India has been operating repatriation flights under Vande Bharat Mission (VBM) since May 6, primarily to bring back Indians stranded abroad and has flown back thousands of people so far. AI had been flying people on VBM flights out of India to certain countries like US, Germany, UK and France (till recently) who were allowing incoming traffic. VBM is now the world’s largest repatriation exercise with private Indian airlines also participating."
              +"<br /><br />In recent weeks, US, France and Germany have asked India to allow their airlines to operate flights like AI’s VBM. France has stopped allowing people to fly on VBM flights to Paris and US has said unless the issue is resolved, AI will need permission to operate the VBM flights to the country from later this month. The special arrangement being made will allow people to travel between India and countries like US, Germany and France."
              +"<br /><br />The MHA currently allows certain categories of foreign nationals, including overseas citizens of India (OCI) cardholders, to enter India. These include foreign nationals married to Indian citizens; foreign national student with one parent being an OCI card holder or an Indian citizen; minor children who have OCI cards and whose parents are Indian citizens and OCI card holders who need to come here due to family emergencies."
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

  generateRandomNumber(): boolean {
    const randomNum = Math.floor(Math.random() * 5);
    return randomNum === 4;
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
