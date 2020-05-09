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
import { AdminTempComponent } from './controllers/adminTemplate/adminTemp.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
/* import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; */
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
    AboutMeComponent,
    AdminTempComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
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
      { path: 'blogs', component: BlogsComponent },
      { path: 'blog/:blogid', component: BlogPageComponent },
      { path: 'aboutme', component: AboutMeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'adminTemp', component: AdminTempComponent },
      { path: '**', component: ErrorComponent }
    ]),
    FontAwesomeModule
  ],
  providers: [
    VideoLogsService,
    BLogsService,
    ProductsService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
