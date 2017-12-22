import { Injectable } from '@angular/core';

import { StockModel } from '../models/stock.model';
import { AlimentModel, UNIT_ENUM } from '../models/aliment.model';
import { Observable } from 'rxjs/Observable';
import { IShoppingListService } from './shopping-list.interface';
import { ShoppingListModel } from '../models/shopping-list.model';

@Injectable()
export class FakeShoppingListService implements IShoppingListService {
  
  getLastShoppingList(): Observable<ShoppingListModel> {
    let shoppingList: ShoppingListModel = {
      id: "5q4qfzzqt84zq8qzfzq4q8",
      ingredients: [
        { 
          aliment: {
            id: "5zq6f4zqf4qz6f8qz448",
            name: "Banane",
            image: "icons/coin.png",
            unit: UNIT_ENUM.UNIT
          },
          quantity: 2,
          isTaken: false
        }
      ],
      isDone: false
    }
    
    return new Observable(sub => {
      sub.next(shoppingList);
      sub.complete();
    });
  }
}