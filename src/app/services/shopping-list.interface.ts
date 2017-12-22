import { ShoppingListModel } from '../models/shopping-list.model';
import { Observable } from 'rxjs/Observable';

export interface IShoppingListService {
  getLastShoppingList(): Observable<ShoppingListModel>;
}