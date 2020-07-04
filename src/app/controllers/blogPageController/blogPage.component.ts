import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from 'src/app/modal/blogs';

@Component({
  selector: 'app-blog-page-control',
  templateUrl: './blogPage.component.html',
  styleUrls: ['./blogPage.component.css']
})
export class BlogPageComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute) {}
  private sub: any;
  blogDetails: Blogs;

  ngOnInit() {
    /* this.blogDetails = this.route.snapshot.paramMap.get('storyDetails') as Blogs; */
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  loadComments(element: HTMLElement) {
    /* document.getElementById('blogPage_Comments')
        .scrollIntoView({
            behavior: "smooth"
        }); */
  }
}
