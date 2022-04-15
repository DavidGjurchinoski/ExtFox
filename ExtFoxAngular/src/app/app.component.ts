import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { RecipeListService } from './exercise-one/product-list/recipe-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  numberOfItemsInCart: number;
  subscription: Subscription;

  constructor(private recipeService: RecipeListService) {}

  ngOnInit(): void {
    this.numberOfItemsInCart = this.recipeService.numberOfItemsInCart;
    this.recipeService.numberOfCartChange.subscribe((numberOfItems) => {
      this.numberOfItemsInCart = numberOfItems;
    });
  }
}
