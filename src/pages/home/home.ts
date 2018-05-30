import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage} from '../login/login';
import {ActivityOnePage} from '../activity-one/activity-one';
import {ActivityTwoPage} from '../activity-two/activity-two';

import { LocalNotifications } from '@ionic-native/local-notifications';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public localNotifications: LocalNotifications) {
  }



  notify(){
    this.localNotifications.schedule({
      id: 1,
      title : 'this is title',
      text: 'Single ILocalNotification',
      sound: null
    });
  }
  logOut(){
    this.navCtrl.push(LoginPage);
  }

  activityOne(){

    setInterval(this.notify(),1000);
    this.navCtrl.push(ActivityOnePage);
    
  }
  activityTwo(){
    setInterval(this.notify(),1000);
    this.navCtrl.push(ActivityTwoPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
