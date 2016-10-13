import { RouterModule, Routes } from '@angular/router';

import { RecipeComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  { path: '', component: RecipeComponent },
  { path: 'shopping', component: ShoppingComponent}
];

export const routing = RouterModule.forRoot(routes);
