import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './exercise-one/product-list/product-list.component';
import { RecipeItemComponent } from './exercise-one/recipe-item/recipe-item.component';
import { ExerciseOneComponent } from './exercise-one/exercise-one.component';
import { AppRouterModule } from './app-router.module';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';
import { PdpItemComponent } from './exercise-two/pdp-item/pdp-item.component';
import { LoadingSpinerComponent } from './exercise-two/loading-spiner/loading-spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    RecipeItemComponent,
    ExerciseOneComponent,
    ExerciseTwoComponent,
    PdpItemComponent,
    LoadingSpinerComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
