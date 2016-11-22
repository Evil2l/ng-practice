
// ======= MODULES
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// ======= COMPONENTS
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipes/recipes.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { FooterComponent } from './footer/footer.component';
import {ShoppingComponent} from './shopping/shopping.component';
import {RecipeItemComponent} from './recipes/recipe-list/recipe-item.component';
import {ShoppingAddComponent} from './shopping/shopping-add.component';
import {LoginFormComponent} from './login/login-form.component';
import {SignupFormComponent} from './signin-form/signup-form.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {RecipeStartComponent} from "./recipes/recipe-start.component";



// ======= DIRECTIVES
import {DropdownDirective} from './dropdown.directive';


// ======= SERVICES
import { ApiService } from './shared';
import {LoginService} from './login/login.service'
import {ShoppingService} from './shopping/shopping.service';
import {LoggedInGuard} from './login/logged-in.guard';
import {RecipeService} from './recipes/recipe.service';

import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    RecipeComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    ShoppingComponent,
    FooterComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeStartComponent,
    ShoppingAddComponent,
    LoginFormComponent,
    SignupFormComponent,
    DropdownDirective
  ],
  providers: [
    ApiService,
    LoggedInGuard,
    LoginService,
    RecipeService,
    ShoppingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
