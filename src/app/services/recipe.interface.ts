import { RecipeModel } from '../models/recipe.model';
import { Observable } from 'rxjs/Observable';

export interface IRecipeService {
  getAll() : Observable<RecipeModel[]>;

  getRecipes(query?: any, limit?: number, offset?: number): Observable<RecipeModel[]>;

  getRecipe(id: string) : Observable<RecipeModel>;

  saveRecipe(recipe: RecipeModel): Observable<RecipeModel>;

  secondsToTimeStr(time: number) : string;

  timeStrToSeconds(time: string): number;

  isAlreadyDone(recipe: RecipeModel) : boolean;
}
