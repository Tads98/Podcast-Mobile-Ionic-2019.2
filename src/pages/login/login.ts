import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { IntroPage } from '../intro/intro';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController) {    
  }

  goToTabsPage(){
    this.navCtrl.push(TabsPage)
  }


}
