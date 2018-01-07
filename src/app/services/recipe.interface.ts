import { RecipeModel } from '../models/recipe.model';
import { Observable } from 'rxjs/Observable';

export interface IRecipeService {
  getAll() : Observable<RecipeModel[]>;

  getRecipe(id: string) : Observable<RecipeModel>;

  recipeTimeToRealFuckingTime(time: number) : string;

  isAlreadyDone(recipe: RecipeModel) : boolean;
}