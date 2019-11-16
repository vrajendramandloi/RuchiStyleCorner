import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './controllers/mainController/app.component';
import { SplashComponent } from './controllers/splashScreen/splash.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './controllers/homeComtroller/home.component';
import { ErrorComponent } from './controllers/errorController/error.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'asd', component: HomeComponent },
/*       { path: 'tableMetaData', component: CompTabMetaDataComponent },
      { path: 'tableValues', component: CompTabValuesComponent }, */
      { path: '', component: ErrorComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
