import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StockModel } from '../models/stock.model';
import { AlimentModel, UNIT_ENUM } from '../models/aliment.model';
import { Observable } from 'rxjs/Observable';
import { IShoppingListService } from './shopping-list.interface';
import { ShoppingListModel } from '../models/shopping-list.model';

@Injectable()
export class ShoppingListService implements IShoppingListService {

  constructor(
    private _http: HttpClient
  ) { }

  getLastShoppingList(): Observable<ShoppingListModel> {
    return this._http.get<ShoppingListModel>("http://localhost:9000/api/shopping-lists");
  }
}
