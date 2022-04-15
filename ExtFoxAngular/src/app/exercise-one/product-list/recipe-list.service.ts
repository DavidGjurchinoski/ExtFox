import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

import { RecipeModel } from 'src/models/recipe-model';

@Injectable({ providedIn: 'root' })
export class RecipeListService {
  listOfRecepiesChange = new Subject<RecipeModel[]>();
  numberOfCartChange = new Subject<number>();
  numberOfItemsInCart: number = 0;

  private listOfRecipes: RecipeModel[] = [
    new RecipeModel(
      100,
      'T-Shirt',
      'A T for the summer',
      '012412',
      'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1e%2F86%2F1e86c77fb86afc19daad9acb5b39470e7bc5ca1f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]'
    ),
    new RecipeModel(
      200,
      'Hoodie',
      'Cap on, Game on',
      '47816248712',
      'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6c%2F15%2F6c150d060d3d1aa95459daf18fd28d23f183c429.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]'
    ),
    new RecipeModel(
      100,
      'Jeans',
      'A blue J for the blues',
      '51666616',
      'https://image.shutterstock.com/image-photo/jeans-on-background-blue-lie-260nw-1189112893.jpg'
    ),
    new RecipeModel(
      50,
      'Shoes',
      'Put a pep in your step',
      '581995171234',
      'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg'
    ),
  ];

  toRecipeList(recipe: RecipeModel) {
    this.listOfRecipes.push(recipe);
    this.listOfRecepiesChange.next(this.listOfRecipes.slice());
  }

  addToCart() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.numberOfItemsInCart += 1;
        this.numberOfCartChange.next(this.numberOfItemsInCart);
        resolve('Resolved');
      }, 5000);
    });
  }

  getRecipelist() {
    return this.listOfRecipes.slice();
  }

  getSingleRecipe(index: number) {
    return this.getRecipelist[index];
  }
}
