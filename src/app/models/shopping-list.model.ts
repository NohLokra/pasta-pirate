import { ShoppingListIngredientModel } from './shopping-list-ingredient.model';

export class ShoppingListModel {
  id: string;
  ingredients: ShoppingListIngredientModel[];
  isDone: boolean;
}