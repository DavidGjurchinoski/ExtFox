import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ExerciseOneComponent } from './exercise-one/exercise-one.component';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';

const appRouter: Routes = [
  { path: '', redirectTo: '/exercise-one', pathMatch: 'full' },
  { path: 'exercise-one', component: ExerciseOneComponent },
  { path: 'exercise-two', component: ExerciseTwoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRouter, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRouterModule {}
