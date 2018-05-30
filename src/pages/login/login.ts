import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HomePage} from '../home/home';
import {RegisterPage} from '../register/register';
import {AngularFireAuth} from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email:string='';
  pass:string='';

  constructor(public fire: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  
  // ------------------------sign in function ---------------------//
  logIn(email,pass){
    this.fire.auth.signInWithEmailAndPassword(email, pass).then(user=>{

      // go to home page if true authorization 
      this.navCtrl.push(HomePage);
      console.log(email+ " "  + pass);

    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      alert(errorMessage);
      // ...
    });
  }

  // ---------------- direct me to register form ----------------//
  SignUP(){
    this.navCtrl.push(RegisterPage);
  }


}
