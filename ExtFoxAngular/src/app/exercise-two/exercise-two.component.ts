import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeModel } from 'src/models/recipe-model';
import { RecipeListService } from '../exercise-one/product-list/recipe-list.service';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.css'],
})
export class ExerciseTwoComponent implements OnInit, OnDestroy {
  recipes: RecipeModel[] = [];
  subscription: Subscription;

  constructor(private recipeListService: RecipeListService) {}

  ngOnInit(): void {
    this.recipes = this.recipeListService.getRecipelist();
    this.subscription = this.recipeListService.listOfRecepiesChange.subscribe(
      (recipes) => {
        this.recipes = recipes;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
