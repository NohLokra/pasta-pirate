import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IRecipeService } from './recipe.interface';
import { RecipeModel } from '../models/recipe.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeService implements IRecipeService {
    
  constructor(
    private _http: HttpClient
  ) { }

  getAll(): Observable<RecipeModel[]> {
    throw new Error("Method not implemented.");
  }

  getRecipe(id: string): Observable<RecipeModel> {
    throw new Error("Method not implemented.");
  }

  recipeTimeToRealFuckingTime(time: number): string {
    var n = new Date(0,0);
    n.setSeconds(+time * 60 * 60);

    return n.toTimeString().slice(0, 5);
  }

  isAlreadyDone(recipe: RecipeModel): boolean {
    throw new Error("Method not implemented.");
  }
}