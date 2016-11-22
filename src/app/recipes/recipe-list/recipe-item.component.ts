import { Component, Input} from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
    selector: 'my-recipe-item',
    template: `
        <a class="clearfix"
          routerLink="{{recipeId}}"
          routerLinkActive="active"
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
export class RecipeItemComponent{


  @Input() recipe: Recipe;
  @Input()  recipeId;

}
