import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

  @ViewChild('username') uname;
  @ViewChild('password') pword;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(){
    console.log("clicked!"+ this.uname.value);
    if(this.uname.value==="admin" && this.pword.value==="123"){
      const alert = this.alertCtrl.create({
        title: 'Login Successful!',
        subTitle: 'You are now logged in!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  

}
