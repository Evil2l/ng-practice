import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'my-recipes',
  templateUrl: 'recipes.component.html',
  styleUrls: ['recipes.component.scss']
})
export class RecipeComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Recipes');
  }
  takeLa(event){
    this.selectedRecipe = event;
  }

}
