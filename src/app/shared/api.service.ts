import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Ingredient} from "./ingredient.model";


@Injectable()
export class ApiService {
  title = 'Api';

  constructor(private http: Http) {

  }


}

