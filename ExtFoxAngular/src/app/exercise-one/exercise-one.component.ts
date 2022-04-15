import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { RecipeModel } from 'src/models/recipe-model';
import { UserModel } from 'src/models/user-model';
import { RecipeListService } from './product-list/recipe-list.service';
import { UserService } from './User API/user.service';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.css'],
})
export class ExerciseOneComponent implements OnInit {
  toggler = true;
  users: UserModel[] = [];

  constructor(
    private recipeListServise: RecipeListService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    interval(5000).subscribe(() => {
      this.toggler = !this.toggler;
    });
  }

  addRecipe() {
    this.recipeListServise.toRecipeList(
      new RecipeModel(
        999,
        'New Recipe',
        'You added this with the button',
        'NEW1111111',
        'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
      )
    );
  }

  callUserAPI() {
    this.userService.getUserData().subscribe((data: any) => {
      this.users = data.data;
      console.log(this.users);
    });
  }
}
