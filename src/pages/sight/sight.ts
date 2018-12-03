import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sight',
  templateUrl: 'sight.html',
})
export class SightPage {


  srcs = [
    "../../assets/imgs/1.jpg",
    "../../assets/imgs/7.jpg",
    "../../assets/imgs/6.jpg",
    "../../assets/imgs/0.jpg",
  ];

  asseys = [
    {
      name: "Ezreal",
      title: "一段话",
      inner: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a ?! Whoa. This is heavy.Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
      iconSrc: "../../assets/imgs/4.jpg",
      likes: 11,
      comments: 25
    },
    {
      name: "Weapon",
      title: "一段话",
      inner: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
      imgSrc: "../../assets/imgs/3.jpg",
      iconSrc: "../../assets/imgs/1.jpg",
      likes: 56,
      comments: 87
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  
  // 下拉刷新
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
