import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }
  logOut() {

  }

}
