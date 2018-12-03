import { Component } from '@angular/core';

import { SightPage } from '../sight/sight';
import { InfoPage } from '../info/info';
import { MePage } from '../me/me';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SightPage;
  tab3Root = InfoPage;
  tab4Root = MePage;

  constructor() {

  }
}
