import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { AngularFireModule } from 'angularfire2'; // firebase added
import { AngularFireDatabaseModule  } from "angularfire2/database"; 
import { AngularFireAuthModule } from 'angularfire2/auth';

import {HomePage} from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import {ActivityOnePage} from '../pages/activity-one/activity-one';
import {ActivityTwoPage} from '../pages/activity-two/activity-two';




import { MyApp } from './app.component';


const config = {
  apiKey: "AIzaSyA9SZOzWWfekHKJZPESw6Rm3tV9u8KCjeM",
  authDomain: "ionictask.firebaseapp.com",
  databaseURL: "https://ionictask.firebaseio.com",
  projectId: "ionictask",
  storageBucket: "ionictask.appspot.com",
  messagingSenderId: "664978290228"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ActivityOnePage,
    ActivityTwoPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ActivityOnePage,
    ActivityTwoPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
