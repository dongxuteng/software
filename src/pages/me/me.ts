import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App} from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public app: App) {
  }

  ionViewDidLoad() {
  }
  
  Login(){
    this.app.getRootNav().push(LoginPage);
  }

}
