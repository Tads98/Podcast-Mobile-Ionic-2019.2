import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

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
