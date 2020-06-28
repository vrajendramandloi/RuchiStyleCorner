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
  asIsOrder(a, b) {
    return 1;
  }
  navigateToBlog(blog: Blogs) {
    const encodedUrl = btoa(JSON.stringify(blog));
    console.log('encoded' + encodedUrl);
    const decodedUrl = atob(encodedUrl);
    const newBlog: Blogs = decodedUrl as unknown as Blogs;
    console.log(newBlog.blogGenere + "--" + newBlog.blogTitle);

    /* this.router.navigate(['/story', blog]); */
  }
}
