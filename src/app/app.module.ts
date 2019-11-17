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
