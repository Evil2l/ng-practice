import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: require ('./app.component.html'),
  styles: [
  require('../assets/css/bootstrap.min.css'),
    require('./app.component.css')]
})
export class AppComponent { }
