import { IngredientModel } from './ingredient.model';

export class RecipeModel {
  id: string;
  name: string;
  image: string;
  description: string;
  ingredients: IngredientModel[];
  type: RECIPE_TYPE;
  time: number; // Time in hours (0.5 = 30 minutes, 0.3334 = 20 minutes, etc)
  alreadyDone?: boolean;
}

export enum RECIPE_TYPE {
  STARTER = "starter",
  DISH = "dish",
  DESSERT = "dessert"
}