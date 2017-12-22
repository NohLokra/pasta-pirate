import { AlimentModel } from './aliment.model';

export class IngredientModel {
  aliment: AlimentModel;
  quantity: number;
  isInStock?: boolean = false;
}