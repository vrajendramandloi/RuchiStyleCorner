import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blogs } from 'src/app/modal/blogs';
import { EncryptDecrypt } from 'src/app/utils/EncryptDecrypt';

@Component({
  selector: 'app-blog-page-control',
  templateUrl: './blogPage.component.html',
  styleUrls: ['./blogPage.component.css']
})
export class BlogPageComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  blogDetails: Blogs;

  ngOnInit() {
    const encryptedMsg = this.route.snapshot.paramMap.get('storyDetails');
    const encd = new EncryptDecrypt();
    const decryptedMsg = encd.decrypterRc4(encryptedMsg, 'VrajendraMandloi');
    console.log(decryptedMsg);
    this.blogDetails = decryptedMsg as Blogs;
  }

  loadComments(element: HTMLElement) {
    /* document.getElementById('blogPage_Comments')
        .scrollIntoView({
            behavior: "smooth"
        }); */
  }
  @HostListener('window:popstate', ['$event'])
  onBrowserBackBtnClose(event: Event) {
      event.preventDefault();
      this.router.navigate(['/stories'],  {replaceUrl: true});
  }
}
