import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { UploadPage } from '../upload/upload';
import { SettingsPage } from '../settings/settings';

@Component({templateUrl: 'tabs.html'})

export class TabsPage {

  tab1Root = HomePage;  
  tab4Root = FeedPage;
  tab5Root = UploadPage;
  tab6Root = SettingsPage;
  
}
