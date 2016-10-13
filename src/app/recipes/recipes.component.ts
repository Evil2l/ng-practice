import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-recipes',
  templateUrl: 'recipes.component.html',
  styleUrls: ['recipes.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
