import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blogs } from 'src/app/modal/blogs';
import { TestService } from 'src/app/service/Test.service';
import * as CryptoJS from 'crypto-js';
import { EncryptDecrypt } from 'src/app/utils/EncryptDecrypt';

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
    const encd = new EncryptDecrypt();
    const encryptedMsg = encd.encrypt(JSON.stringify(blog.toString()), 'VrajendraMandloi');
    console.log('encrypted', encryptedMsg);

    const encd2 = new EncryptDecrypt();
    const decryptedMsg = encd2.decrypt(encryptedMsg, 'VrajendraMandloi');
    console.log('decrypted nsg {}', CryptoJS.enc.Base64.parse(decryptedMsg));

    /* this.router.navigate(['/story', { storyDetails: blog }]); */
  }
}
