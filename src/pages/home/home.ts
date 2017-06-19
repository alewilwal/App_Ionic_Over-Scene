import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OverSceneApiGlobal }   from '../../models/oversceneapi-global.model';
import { OverSceneApiService }   from '../../services/oversceneapi.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  news: OverSceneApiGlobal = new OverSceneApiGlobal();

  constructor(public navCtrl: NavController, private OverSceneApiService: OverSceneApiService) {

    this.OverSceneApiService.getArticles()
    .then(newsFetched => { 
      this.news = newsFetched;
      console.log(this.news);
      
    });
  }

}
