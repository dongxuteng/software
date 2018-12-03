import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { clamp } from 'ionic-angular/util/util';
import { NeirongPage } from '../neirong/neirong';
declare var BMap;
// declare var BMapLib;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  Mon:string;
  Date:Number;
  Year:Number;
  localCityName: string;
  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() { 
//日期
    var arr=["Jan","Feb","Mar","Apr","May","Jun",,"Jul","Aug","Sept","Oct","Nov","Dec"];
    var d=new Date();
    this.Year=d.getFullYear();
    this.Date=d.getDate();
    this.Mon= arr[d.getMonth()+1];
    return this.Date+this.Mon+this.Year;
  }
  arr=[
     {title:'闯入者',name:'赫恩曼尼',
      msg:'她早该知道的，儿子有了女友，并且住在了一起，可还是自我麻烦，装傻充愣，在儿子的公寓赖了大半个月，看他心不在焉地陪自己。她装起胆，编造种种理由去看他，其实为的是暂时躲避另一个男人。',
      img:'assets/imgs/2.jpg',
      tx:'assets/imgs/icon.png',
      num:'50'
    },
    {title:'闯入者2',name:'赫恩曼尼',
     msg:'她早该知道的，儿子有了女友，并且住在了一起，可还是自我麻烦，装傻充愣，在儿子的公寓赖了大半个月，看他心不在焉地陪自己。她装起胆，编造种种理由去看他，其实为的是暂时躲避另一个男人。',
     img:'assets/imgs/1.jpg',
     tx:'assets/imgs/icon.png',
     num:'50'
   }
    
  ]

  Go_nr(){
      this.navCtrl.push(NeirongPage) ;
  }
  Go_fb(){
    this.navCtrl.push('FabuPage');
  }
}
