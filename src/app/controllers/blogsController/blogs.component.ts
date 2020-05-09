import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { TestService } from 'src/app/service/Test.service';
import { Blogs } from 'src/app/modal/blogs';

@Component({
  selector: 'blogs-control',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  loadingApp = true;
  blogsList: Blogs[] = [];

  constructor(private testService: TestService, public sanitizer: DomSanitizer) {
    console.log('blogs Component called');
  }

  ngOnInit() {
    console.log('Fetching Entries from blogs Service');
    /* this.blogsList = this.testService.getBlogs();
    console.log(this.blogsList); */
  }
}
