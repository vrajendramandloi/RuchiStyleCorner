import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-page-control',
  templateUrl: './blogPage.component.html',
  styleUrls: ['./blogPage.component.css']
})
export class BlogPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params);
    });
  }

  loadComments(element: HTMLElement) {
    /* document.getElementById('blogPage_Comments')
        .scrollIntoView({
            behavior: "smooth"
        }); */
  }
}
