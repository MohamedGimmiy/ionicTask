import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage} from '../login/login';
import {ActivityOnePage} from '../activity-one/activity-one';
import {ActivityTwoPage} from '../activity-two/activity-two';


import {AngularFireAuth} from 'angularfire2/auth';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public fire:AngularFireAuth) {
  }




  
  logOut(){
    this.fire.auth.signOut().then(function() {
      // Sign-out successful.
      setInterval(alert('signed out successfully'),1000);
    }).catch(function(error) {
      // An error happened.
      alert('error happened')
    });
    this.navCtrl.setRoot(LoginPage);
  }

  activityOne(){

    this.navCtrl.push(ActivityOnePage);
    
  }
  activityTwo(){
    this.navCtrl.push(ActivityTwoPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
