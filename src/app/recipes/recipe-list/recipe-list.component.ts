import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';
import {ApiService} from '../../shared/api.service';

@Component({
    selector: 'my-recipe-list',
    templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

  @Output() selectedRecipe = new EventEmitter();



    constructor(private api: ApiService) {
      this.recipes = this.api.recipes;
    }

    ngOnInit() { }

  onSelect(recipe) {
    console.log(recipe);
    this.selectedRecipe.emit(recipe);
  }

}
