import { IngredientModel } from './ingredient.model';

export class RecipeModel {
  id: string;
  name: string;
  image: string;
  description: string;
  ingredients: IngredientModel[];
  type: RECIPE_TYPE;
}

export enum RECIPE_TYPE {
  STARTER = "Entrée",
  DISH = "Plat",
  DESSERT = "Dessert"
}