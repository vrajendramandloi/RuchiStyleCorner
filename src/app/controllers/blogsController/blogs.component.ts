import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blogs } from 'src/app/modal/blogs';
import { TestService } from 'src/app/service/Test.service';

@Component({
  selector: 'blogs-control',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  loadingApp = true;
  blogsListMap: Map<string, Blogs[]>;

  constructor(private testService: TestService, private router: Router) { }

  ngOnInit() {
    this.testService.getBlogsMap().then(data => {
      this.blogsListMap = data;
    });
  }

  navigateToBlog(blog: Blogs) {
    this.router.navigate(['/blog', blog]);
  }
}
