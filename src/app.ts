import {RouterConfiguration, Router} from 'aurelia-router';
import { DataSource } from './services/data-source';
import LocalDataSource from './services/local-data-source';
import Dish from './models/dish';

export class App {
  router: Router;
  dataSource: DataSource<Dish>;
  constructor(){
    this.dataSource = new LocalDataSource();
  }
  configureRouter(config: RouterConfiguration, router: Router): void{
    this.router = router;
    config.title = 'speciala';
    config.map([
      { route: ['', 'eat'], name: 'eat', moduleId: 'eat', title:'eat', nav: true },
      { route: 'cook', name: 'cook', moduleId: 'cook', title:'cook', nav: true },
      { route: 'me', name: 'me', moduleId: 'me', title:'me', nav:true }
    ]);

  }
}
