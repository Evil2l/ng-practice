import {Component, OnInit, OnDestroy} from '@angular/core';
import {Recipe} from '../../shared/recipe.model';
import {ShoppingService} from "../../shopping/shopping.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {RecipeService} from "../recipe.service";

@Component({
    selector: 'my-recipe-detail',
    templateUrl: 'recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private recipeIndex: number;
  selectedRecipe: Recipe;


    constructor(
      private shoppingService: ShoppingService,
      private route: ActivatedRoute,
      private recipeService: RecipeService,
      private router: Router
    ) { }

    ngOnInit() {
      this.subscription = this.route.params.subscribe(
        (params:any) => {
          this.recipeIndex = params['id'];
          this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);
        }
      )
    }

    ngOnDestroy(){
      this.subscription.unsubscribe();
    }

    onAddToShopping(){
      this.shoppingService.addIngredient(this.selectedRecipe.ingredients);
    }

    onEditRecipe(){
      this.router.navigate(['/recipes', this.recipeIndex, 'edit' ])
    }

    onDeleteRecipe(){
      this.recipeService.deleteRecipe(this.selectedRecipe);
      this.router.navigate(['/recipes']);
    }

}
