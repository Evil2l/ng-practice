import { RouterModule, Routes } from '@angular/router';

import { RecipeComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  { path: 'recipes', component: RecipeComponent },
  { path: 'shopping', component: ShoppingComponent}
  // { path: '', component: RecipeComponent}
];

export const routing = RouterModule.forRoot(routes);
