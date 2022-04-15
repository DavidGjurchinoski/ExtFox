import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeModel } from 'src/models/recipe-model';
import { RecipeListService } from './recipe-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  listOfRecipes: RecipeModel[];
  subscription: Subscription;

  constructor(private recipeListService: RecipeListService) {}

  ngOnInit(): void {
    this.listOfRecipes = this.recipeListService.getRecipelist();
    this.subscription = this.recipeListService.listOfRecepiesChange.subscribe(
      (recipeItem: RecipeModel[]) => {
        this.listOfRecipes = recipeItem;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
