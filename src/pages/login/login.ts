import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { DashboardareaPage } from '../dashboardarea/dashboardarea';


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
  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: "Information",
      subTitle: message,
      buttons: ["OK"]
    }).present();
  }

  logIn() {

    this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.pword.value)
      .then(data => {
        console.log("data fetched!", data);
        this.alert("Success! You are logged in!");
        this.navCtrl.setRoot(DashboardareaPage);
      })
      .catch(error => {
        console.log("Error! ", error);
        this.alert(error.message);
      });
    // console.log("clicked!"+ this.uname.value);
    // if(this.uname.value==="admin" && this.pword.value==="123"){
    //   const alert = this.alertCtrl.create({
    //     title: 'Login Successful!',
    //     subTitle: 'You are now logged in!',
    //     buttons: ['OK']
    //   });
    //   alert.present();
    // }
  }



}
