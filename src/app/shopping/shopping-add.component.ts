import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingService} from "./shopping.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'my-shopping-add',
    template: `
<div class="row">
  <div class="col-xs-12">
    <form id="shopping-list-add" (ngSubmit)="onSubmit(form.value, form)" #form="ngForm">
      <div class="row">
        <div class="col-sm-5 form-group">
          <label for="item-name">Name</label>
          <input 
            type="text" 
            id="item-name" 
            class="form-control"
            [ngModel]="item?.name"
            name="name"
           >
        </div>

        <div class="col-sm-2 form-group">
          <label for="item-amount">Amount</label>
          <input 
            type="number" 
            id="item-amount" 
            required 
            class="form-control"
            [ngModel]="item?.amount"
            name="amount"
          >
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
        
          <button 
          class="btn btn-success" 
          type="submit" 
          *ngIf="isAdd" 
          [disabled]="!form.valid">Add</button>
          
          <button 
          class="btn btn-success" 
          type="submit" 
          *ngIf="!isAdd" 
          [disabled]="!form.valid">Save</button>
          
          <button 
              class="btn btn-danger" 
              type="button" *ngIf="!isAdd" 
              [disabled]="!form.valid"
              (click)="onDelete(item, form)"
          >Delete Item</button>
          
          <button 
              class="btn btn-primary" 
              type="button" 
              *ngIf="!isAdd"
              [disabled]="!form.valid"
              (click)="onClear(form)"
          >Clear</button>
        </div>
      </div>
    </form>
  </div>
</div>
`
})
export class ShoppingAddComponent implements OnChanges {
  @Input() item: Ingredient;
  @Output() onClearEvent = new EventEmitter;

  // Here we have some kind of checker of what function do we use or what event run
  // because if we adding new component we need to see only add button
  // and if we edit it we use other buttons, and this marker works in one or
  // another situation so we turn it on or off
  isAdd = true;

    constructor( private shoppingService: ShoppingService  ) {

    }

    ngOnChanges(changes){
      if (changes.item.currentValue === null) {
        this.isAdd = true;
        this.item = { name: null, amount: null }
      }
      else{
        this.isAdd = false;
      }
    }

    onSubmit(ingredient: Ingredient){
      const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
      if (!this.isAdd) {
        this.shoppingService.editItem( this.item, newIngredient);
        this.onClear();
      }
      else{
        this.item = newIngredient;
        this.shoppingService.addItem(this.item);
        this.item = { name: null, amount: null }
      }
    }

  onDelete(item: Ingredient){
    this.shoppingService.deleteItem(item);
    this.onClear();
  }

  onClear(){
    this.onClearEvent.emit();
  }

}
