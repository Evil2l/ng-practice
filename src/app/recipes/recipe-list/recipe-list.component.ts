import { Component, OnInit} from '@angular/core';
import {Recipe} from '../../shared/recipe.model';
import {RecipeService} from "../recipe.service";

@Component({
    selector: 'my-recipe-list',
    templateUrl: 'recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];

    constructor(private recipeServices: RecipeService) {
      this.recipes = this.recipeServices.getRecipes();
    }

    ngOnInit() { }


}
