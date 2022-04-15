import { Component, Input, OnInit } from '@angular/core';
import { RecipeListService } from 'src/app/exercise-one/product-list/recipe-list.service';

import { RecipeModel } from 'src/models/recipe-model';

@Component({
  selector: 'app-pdp-item',
  templateUrl: './pdp-item.component.html',
  styleUrls: ['./pdp-item.component.css'],
})
export class PdpItemComponent {
  @Input() recipe: RecipeModel;
  @Input() index: number;
  isLoading: boolean = false;

  constructor(private recipeService: RecipeListService) {}

  onAddToCart() {
    this.isLoading = true;
    this.recipeService.addToCart().then(() => {
      this.isLoading = false;
    });
  }
}
