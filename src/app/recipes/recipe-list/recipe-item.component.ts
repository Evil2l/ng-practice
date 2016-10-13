import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'my-recipe-item',
    template: `
        <a class="clearfix"
        
        >
          <div class="pull-xs-left">
            <h4 class="list-group-item-heading">{{recipe?.name}}</h4>
            <p class="list-group-item-text">{{recipe?.description}}</p>
          </div>
          <span class="pull-xs-right">
              <img class="img-responsive"
                   src="{{recipe?.imagePath}}"
                   style="max-height: 50px;"/>
          </span>
        </a>
        <hr>
`
})
export class RecipeItemComponent implements OnInit {


  @Input() recipe: Recipe;

  recipeId;

    constructor() { }

    ngOnInit() { }


}
