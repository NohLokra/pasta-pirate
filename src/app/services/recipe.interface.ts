import { RecipeModel } from '../models/recipe.model';
import { Observable } from 'rxjs/Observable';

export interface IRecipeService {
  getRecipe(id: string) : Observable<RecipeModel>;
}