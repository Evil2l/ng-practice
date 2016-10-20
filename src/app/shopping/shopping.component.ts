import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingService} from "./shopping.service";

@Component({
  selector: 'my-shopping',
  templateUrl: 'shopping.component.html',
  styleUrls: ['shopping.component.scss']
})
export class ShoppingComponent{

  items: Ingredient[] = [];
  selectedItem: Ingredient = null;

  constructor(private shoppingService: ShoppingService) {
    this.items = this.shoppingService.getItems();
  }


  onSelect(item: Ingredient){
    this.selectedItem = item;
    console.log(this.selectedItem);
  }

  toClear(){
    this.selectedItem = null;
  }

}
