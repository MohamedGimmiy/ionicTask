import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {AngularFireAuth} from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public fire : AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {

    
    
  }

  email : string ='';
  password : string ='';
  age : string='';
  register(email,password){
    
    this.fire.auth.createUserWithEmailAndPassword(email,password).then(user=>{
      console.log("entered");
    }).catch(function(error) {
      console.log(error);
    });
    
    this.navCtrl.push(HomePage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
