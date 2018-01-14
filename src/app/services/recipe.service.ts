import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { IRecipeService } from './recipe.interface';
import { RecipeModel } from '../models/recipe.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeService implements IRecipeService {

  constructor(
    private _http: HttpClient
  ) { }

  getAll(): Observable<RecipeModel[]> {
    return this._http.get<RecipeModel[]>("http://localhost:9000/api/recipes");
  }

  getRecipes(query?: any, limit?: number, offset?: number): Observable<RecipeModel[]> {
    throw new Error("Method not implemented.");
  }

  getRecipe(id: string): Observable<RecipeModel> {
    return this._http.get<RecipeModel>("http://localhost:9000/api/recipes/" + id);
  }

  saveRecipe(recipe: RecipeModel): Observable<RecipeModel> {
    let params = new HttpParams();
    for ( let field in recipe ) {
      params.set(field, recipe[field]);
    }

    return this._http.post<RecipeModel>("http://localhost:9000/api/recipes", null, {
      params: params
    });
  }

  secondsToTimeStr(time: number): string {
    var n = new Date(0,0);
    n.setSeconds(+time * 60 * 60);

    return n.toTimeString().slice(0, 5);
  }

  timeStrToSeconds(time: string): number {
    return +time.match(/\d\d/)[1] * 60 * 60 + +time.match(/\d\d/)[1] * 60;
  }

  isAlreadyDone(recipe: RecipeModel): boolean {
    console.log(recipe);

    return false;
  }
}
