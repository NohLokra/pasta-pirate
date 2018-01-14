import { RecipeModel } from '../models/recipe.model';
import { Observable } from 'rxjs/Observable';

export interface IRecipeService {
  getAll() : Observable<RecipeModel[]>;

  getRecipe(id: string) : Observable<RecipeModel>;

  saveRecipe(recipe: RecipeModel): Observable<RecipeModel>;

  recipeTimeToRealFuckingTime(time: number) : string;

  annoyingTimeToMotherFuckingRecipeTime(time: string): number;

  isAlreadyDone(recipe: RecipeModel) : boolean;
}