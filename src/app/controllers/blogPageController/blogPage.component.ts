import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from 'src/app/modal/blogs';
import { EncryptDecrypt } from 'src/app/utils/EncryptDecrypt';

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
    const encryptedMsg = this.route.snapshot.paramMap.get('storyDetails');
    const encd = new EncryptDecrypt();
    const decryptedMsg = encd.decrypterRc4(encryptedMsg, 'VrajendraMandloi');
    this.blogDetails = decryptedMsg as Blogs;
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
