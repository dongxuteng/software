import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
  }

  ionViewDidLoad() {
  }

  goSignup(){
    this.navCtrl.push(SignupPage);
  }
  
  // 返回首页
  return(){
    this.app.getRootNavs()[0].setRoot(TabsPage);
  } 

  //ionic当退出页面的时候触发的方法
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
	   Object.keys(elements).map((key) => {
    		elements[key].style.display = 'flex';
	    });
    }
  }

}
