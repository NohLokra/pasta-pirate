import { RecipeModel } from './recipe.model';

export class MenuModel {
  id: string;
  starter: RecipeModel;
  dish: RecipeModel;
  dessert: RecipeModel;
}