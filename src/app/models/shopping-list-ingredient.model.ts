import { AlimentModel } from './aliment.model';

export class ShoppingListIngredientModel {
  aliment: AlimentModel;
  quantity: number;
  isTaken: boolean;
}