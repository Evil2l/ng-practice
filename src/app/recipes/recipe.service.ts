import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "../shared/recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';


@Injectable()

export class RecipeService {

  recipesChanged = new EventEmitter<Recipe[]>();

  mainUrl: string = 'https://recipe-beece.firebaseio.com';

  recipes: Recipe[] = [
    new Recipe(
      'Saltwort',
      'The filling can be minced meat (pork, lamb, beef, or any other kind of meat), or fish. The mixing together of different kinds of meat is also popular. The traditional Udmurt recipe requires a mixture of 45% beef, 35% mutton, and 20% pork.[2] Various spices, such as black pepper and diced onions as well as garlic, are mixed into the filling.',
      'http://kallorii.info/uploads/solyanka/recept-recept-solyanka-sbornaya-myasnaya-skachat_8381.jpg', [
      new Ingredient( 'cheese', 4),
      new Ingredient('egg', 8)
    ]),
    new  Recipe(
      'Pelmeni',
      'Recipe soup solyanka considered one of the mostpopular in Russian cuisine. The soup is prepared with meat, fish or chicken broth by adding a variety of pickles and smoked. Classical halophyte - soup with smoked bacon and lots of fresh herbs.',
      'http://ekogradmoscow.ru/images/raznoe3/184514_original.jpg', [])
  ];

    constructor( private http: Http ) { }

  getRecipes(): Recipe[] {
    return this.recipes;
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  addRecipe( recipe: Recipe){
    this.recipes.push(recipe);
  }

  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-type': 'application/json'
    });
    return this.http.put(
      `${this.mainUrl}/recipes.json`,
      body,
      {
        headers: headers
      }
    )
  }

  fetchData(){
    return this.http.get(`${this.mainUrl}/recipes.json`)
        .map((result: Response) => result.json())
        .subscribe(
            (data: Recipe[])  =>{
                this.recipes = data;
                this.recipesChanged.emit(this.recipes);
            }
        );


  }


}
