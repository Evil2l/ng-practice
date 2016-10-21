import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../recipes/recipe.service";

@Component({
  selector: 'my-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( private recipeService: RecipeService) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello About');
  }
  logOut() {

  }

  onStore(){
    this.recipeService.storeData().subscribe();
  }

  onRetrive(){
    this.recipeService.fetchData()
  }

}
