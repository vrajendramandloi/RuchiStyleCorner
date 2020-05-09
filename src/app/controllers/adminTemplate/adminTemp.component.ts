import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VideoLogsService } from 'src/app/service/VideoLogs.service';
import { VideoLogs } from 'src/app/utils/videoLogs';
import { Products } from 'src/app/utils/products';
import { Blogs } from 'src/app/modal/blogs';
import { ProductsService } from 'src/app/service/Products.service';
import { BLogsService } from 'src/app/service/BLogs.service';

@Component({
  selector: 'app-adminTemplate',
  templateUrl: './adminTemp.component.html',
  styleUrls: ['./adminTemp.component.css']
})
export class AdminTempComponent {
  constructor(private videoLogService: VideoLogsService, private productsService: ProductsService, private blogsService: BLogsService) { }

  /* Vlog Details input */
  vlogsFormGroup = new FormGroup({
    fc_vlogTitle: new FormControl('', Validators.required),
    fc_vlogLink: new FormControl('', Validators.required),
    fc_vlogGenere: new FormControl('', Validators.required),
    fc_vlogDateTime: new FormControl(new Date(), Validators.required)
  });

  productsFormGroup = new FormGroup({
    fc_productImg: new FormControl('', Validators.required),
    fc_productName: new FormControl('', Validators.required),
    fc_productDesc: new FormControl('', Validators.required),
    fc_productPrice: new FormControl('', Validators.required),
    fc_productRemainingQty: new FormControl('', Validators.required),
    fc_productTotalQty: new FormControl('', Validators.required),
    fc_productDateTime: new FormControl(new Date(), Validators.required)
  });

  blogsFormGroup = new FormGroup({
    fc_blogTitle: new FormControl('', Validators.required),
    fc_blogAuthor: new FormControl('', Validators.required),
    fc_blogDateTime: new FormControl(new Date(), Validators.required),
    fc_blogThumbnail: new FormControl('', Validators.required),
    fc_blogText: new FormControl('', Validators.required),
    fc_blogLikes: new FormControl('', Validators.required),
    fc_blogDislikes: new FormControl('', Validators.required)
  });
  /* Vlogs Input Details */
  get fc_vlogTitle() {
    return this.vlogsFormGroup.get('fc_vlogTitle');
  }
  get fc_vlogLink() {
    return this.vlogsFormGroup.get('fc_vlogLink');
  }
  get fc_vlogGenere() {
    return this.vlogsFormGroup.get('fc_vlogGenere');
  }
  get fc_vlogDateTime() {
    return this.vlogsFormGroup.get('fc_vlogDateTime');
  }
  createNewVlogEntry() {
    if (this.vlogsFormGroup.valid) {
      const vlogInfo: VideoLogs = {
        vlogIndex: 1,
        vlogTitle: this.fc_vlogTitle.value,
        vlogLink: this.fc_vlogLink.value,
        vlogGenere: this.fc_vlogGenere.value,
        vlogDateTime: this.fc_vlogDateTime.value,
      };
      console.log('Calling Service to persist Object {}', vlogInfo);
      this.videoLogService.createEntry(vlogInfo);
    }
  }
  /* Product Input Details */
  get fc_productImg() {
    return this.productsFormGroup.get('fc_productImg');
  }
  get fc_productName() {
    return this.productsFormGroup.get('fc_productName');
  }
  get fc_productDesc() {
    return this.productsFormGroup.get('fc_productName');
  }
  get fc_productPrice() {
    return this.productsFormGroup.get('fc_productPrice');
  }
  get fc_productRemainingQty() {
    return this.productsFormGroup.get('fc_productRemainingQty');
  }
  get fc_productTotalQty() {
    return this.productsFormGroup.get('fc_productTotalQty');
  }
  get fc_productDateTime() {
    return this.productsFormGroup.get('fc_productDateTime');
  }
  createNewProductEntry() {
    if (this.productsFormGroup.valid) {
      const product: Products = {
        productImg: this.fc_productImg.value,
        productName: this.fc_productName.value,
        productDesc: this.fc_productDesc.value,
        productPrice: this.fc_productPrice.value,
        productRemainingQty: this.fc_productRemainingQty.value,
        productTotalQty: this.fc_productTotalQty.value,
        productDateTime: this.fc_productDateTime.value
      };
      console.log('Calling Service to persist Object {}', product);
      this.productsService.createEntry(product);
    }
  }

  /* Blogs Input Details */
  get fc_blogTitle() {
    return this.blogsFormGroup.get('fc_blogTitle');
  }
  get fc_blogAuthor() {
    return this.blogsFormGroup.get('fc_blogAuthor');
  }
  get fc_blogDateTime() {
    return this.blogsFormGroup.get('fc_blogDateTime');
  }
  get fc_blogThumbnail() {
    return this.blogsFormGroup.get('fc_blogThumbnail');
  }
  get fc_blogText() {
    return this.blogsFormGroup.get('fc_blogText');
  }
  get fc_blogLikes() {
    return this.blogsFormGroup.get('fc_blogLikes');
  }
  get fc_blogDislikes() {
    return this.blogsFormGroup.get('fc_blogDislikes');
  }
  createNewBlogEntry() {
    if (this.blogsFormGroup.valid) {
      const newBlogTitle: string = this.fc_blogTitle.value;
      const newBlog: Blogs = {
        blogTitle: newBlogTitle,
        blogAuthor: this.fc_blogAuthor.value,
        blogDateTime: this.fc_blogDateTime.value,
        blogThumbnail: this.fc_blogThumbnail.value,
        blogText: this.fc_blogText.value,
        blogLikes: this.fc_blogLikes.value,
        blogDislikes: this.fc_blogDislikes.value
      };
      console.log('Calling Service to persist Object {}', newBlog);
      this.blogsService.createNewBlogEntry(newBlog);
    }
  }
}
