import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  constructor(
    private name: string,
    private description: string,
    private imagePath: string,
    private ingredients: Ingredient[]
  ) {

  }
}
