import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {Recipe} from "../../shared/recipe.model";
import {ActivatedRoute, Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {FormArray, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
    selector: 'my-recipe-edit',
    templateUrl: 'recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit, OnDestroy {


  recipeForm: FormGroup;
  // here we use it to subscribe to our routing params
  // and get data (id, name, etc) from our routing
  // address line
  private subscription: Subscription;
  private recipeIndex: number;
  private selectedRecipe: Recipe;

  // marker or checker to understand what we doing,
  // creating new element with clear fields or edit some
  // with fulfill form of component's data
  private isNew = true;


  constructor(

    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

    // this lifecycle hook uses when start build our app
    // and then we subscribe to our routes to check if
    // our router params has property id, that will mean
    // we come to edit from detail component
    // so we will turn our checker to 'not New'
    // then get interested item from service with its id
    // and fill the fields with its data
    ngOnInit() {

      this.subscription = this.route.params.subscribe(
        (params:any) => {
          if (params.hasOwnProperty('id')) {
            this.isNew = false;
            this.recipeIndex = params['id'];
            this.selectedRecipe = this.recipeService.getRecipe(this.recipeIndex);

          }
          else{
            this.isNew = true;
            this.selectedRecipe = null;
          }
          // this'll build our form
          this.initForm();
        }
      )
    }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onCancel(){
      this.router.navigate(['../'])
  }

  onSubmit(){
    const newRecipe = this.recipeForm.value;
    if(!this.isNew){
      this.recipeService.editRecipe(this.selectedRecipe, newRecipe)
    }
    else{
      this.selectedRecipe = newRecipe;
      this.recipeService.addRecipe(this.selectedRecipe)
    }
    this.router.navigate(['../']);
  }

  onAddIngredient(name: string, amount: string){
    (<FormArray>this.recipeForm.controls['ingredients'])
      .push(
        new FormGroup({
          name: new FormControl(
            name,
            Validators.required
          ),
          amount: new FormControl(
            amount,
            [
              Validators.required,
              Validators.pattern("\\d+")
            ]
          )
        })
      )
  }

  onRemoveIngredient(index: number){
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index)
  }





// her we describe method or way in which we'll create reactive form
  private initForm(){

    // here we create empty fields of our form
      let recipeName = '';
      let recipeImg = '';
      let recipeDescription = '';
      let recipeIngredients: FormArray = new FormArray([]);

    // BUT next step to check if we go there to edit existing component
    if (!this.isNew) {
      // if it is NOT new element we start simple iteration
      for(let i = 0; i < this.selectedRecipe.ingredients.length; i++){
          // here we create array of ingredients pushing them as FormGroup
          recipeIngredients.push(
            // every form group is an Object with needed properties
            new FormGroup({
              name: new FormControl(
                // this why we need loop to get index of ingredient
                this.selectedRecipe.ingredients[i].name,
                Validators.required
              ),
              amount: new FormControl(
                  this.selectedRecipe.ingredients[i].amount,
                [
                  Validators.required,
                  Validators.pattern("\\d+")
                ]
              )
            })
          )
      }
      // here we define simple parts of our components
      recipeName = this.selectedRecipe.name;
      recipeImg = this.selectedRecipe.imagePath;
      recipeDescription = this.selectedRecipe.description;
    }
    // here we define our form with empty fields or filled with data to edit as result
    // of our if statement
    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImg, Validators.required],
      description: [recipeDescription, Validators.required],
      ingredients: recipeIngredients

    })
  }

}
