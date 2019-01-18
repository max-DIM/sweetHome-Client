import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, Platform } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { TranslateService } from '@ngx-translate/core';

export interface Slide {
  title: string;
  description: string;
  image: string;
}

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
  slides: Slide[];
  showSkip = true;
  dir: string = 'ltr';

  assets: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
      this.getAsset();
  }

  getAsset() {
      this.restProvider.getAsset()
          .then(data => {
              this.assets = data;
              console.log(this.assets);
          });
  }

}
