import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the DashboardareaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboardarea',
  templateUrl: 'dashboardarea.html',
})
export class DashboardareaPage {

  email:string;

  constructor(private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
    this.email =  fire.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardareaPage');
  }

}
