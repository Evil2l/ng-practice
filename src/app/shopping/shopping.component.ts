import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-shopping',
  templateUrl: 'shopping.component.html',
  styleUrls: ['shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Shop');
  }

}
