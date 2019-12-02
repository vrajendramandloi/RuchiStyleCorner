import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './controllers/mainController/app.component';
import { SplashComponent } from './controllers/splashScreen/splash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './controllers/homeComtroller/home.component';
import { ErrorComponent } from './controllers/errorController/error.component';
import { NavbarComponent } from './controllers/navbarController/navbar.component';
import { VlogsComponent } from './controllers/vlogsController/vlogs.component';
import { BlogsComponent } from './controllers/blogsController/blogs.component';
import { FashionLifestyleComponent } from './controllers/fashionLifestyleController/fashionlifestyle.component';
import { AboutMeComponent } from './controllers/aboutmeController/aboutme.component';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

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
    AboutMeComponent,
    FashionLifestyleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'vlogs', component: VlogsComponent },
      { path: 'blogs', component: BlogsComponent },
      { path: 'aboutme', component: AboutMeComponent },
      { path: 'fashionLifestyle', component: FashionLifestyleComponent },
      { path: '**', component: ErrorComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
