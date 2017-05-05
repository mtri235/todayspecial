import {RouterConfiguration, Router} from 'aurelia-router';

export class App {
  router: Router;
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
