import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './login/logged-in.guard';

import { RecipeComponent } from './recipes/recipes.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { SignupFormComponent } from './signin-form/signup-form.component';
import { RECIPE_ROUTES } from "./recipes/recipes.routes";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipeComponent,
    children: RECIPE_ROUTES
  },
  {
    path: 'sign',
    component: SignupFormComponent
  },

  {
    path: 'shopping',
    component: ShoppingComponent
  },
  {
    path: '**',
    redirectTo: '/recipes'
  }
];

export const routing = RouterModule.forRoot(routes);
