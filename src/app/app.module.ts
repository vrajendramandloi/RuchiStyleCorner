import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './controllers/mainController/app.component';
import { SplashComponent } from './controllers/splashScreen/splash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './controllers/errorController/error.component';
import { NavbarComponent } from './controllers/navbarController/navbar.component';
import { VlogsComponent } from './controllers/vlogsController/vlogs.component';
import { BlogsComponent } from './controllers/blogsController/blogs.component';
import { AboutMeComponent } from './controllers/aboutmeController/aboutme.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { HomeComponent } from './controllers/homeController/home.component';
import { DisplayDialogUtils } from './dialog/displayDialogUtils';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoLogsService } from './service/VideoLogs.service';
import { ProductsComponent } from './controllers/productsController/products.component';
import { BLogsService } from './service/BLogs.service';
import { ProductsService } from './service/Products.service';
import { TestService } from './service/Test.service';
import { HttpClientModule } from '@angular/common/http';
import { BlogPageComponent } from './controllers/blogPageController/blogPage.component';
import { HomePageSliderComponent } from './controllers/homePageSliderController/homepageslider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlickityModule } from 'ngx-flickity';
import { SmAniCounterComponent } from './controllers/smAniCounter/smAniCounter.component';
import { PromotionsComponent } from './controllers/promotionsController/promotions.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CarouselComponent } from './controllers/carouselController/carousel.component';
import { PromoPanelComponent } from './controllers/promoPanelController/promopanel.component';
import { PromotionService } from './service/Promotions.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyACVPW520b_cF6dtJIiMg4NJ9_Rmfv1qHo',
  authDomain: 'fbase-demo-vic1.firebaseapp.com',
  databaseURL: 'https://fbase-demo-vic1.firebaseio.com',
  projectId: 'fbase-demo-vic1',
  storageBucket: 'fbase-demo-vic1.appspot.com',
  messagingSenderId: '946519407971',
  appId: '1:946519407971:web:c2f7306625b8ea98bea756'
};

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HomeComponent,
    ErrorComponent,
    NavbarComponent,
    VlogsComponent,
    BlogsComponent,
    BlogPageComponent,
    PromoPanelComponent,
    AboutMeComponent,
    CarouselComponent,
    PromotionsComponent,
    ProductsComponent,
    SmAniCounterComponent,
    HomePageSliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    NgbModule,
    FlickityModule,
    MatSelectModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'vlogs', component: VlogsComponent },
      { path: 'stories', component: BlogsComponent },
      { path: 'story/:storyDetails', component: BlogPageComponent },
      { path: 'aboutme', component: AboutMeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'promotions', component: PromotionsComponent },
      { path: 'testPage', component: SmAniCounterComponent },
      { path: 'promopanel', component: PromoPanelComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: '**', component: ErrorComponent }
    ]),
    FontAwesomeModule
  ],
  providers: [
    VideoLogsService,
    BLogsService,
    ProductsService,
    TestService,
    DisplayDialogUtils,
    PromotionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
