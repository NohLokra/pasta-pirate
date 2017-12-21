import { Injectable } from '@angular/core';

import { IStockService } from './stock.interface';
import { StockModel } from '../models/stock.model';
import { FoodModel, UNIT_ENUM } from '../models/food.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FakeStockService implements IStockService {
  getStock() : Observable<StockModel[]> {
    let stock : StockModel[] = [
      { 
        food: {
          name: "Oeuf",
          image: "icons/coin.png",
          unit: UNIT_ENUM.UNIT
        }, 
        quantity: 6
      },
      { 
        food: {
          name: "Tchoin",
          image: "icons/coin.png",
          unit: UNIT_ENUM.KILO
        }, 
        quantity: 35
      }
    ];

    return new Observable((sub) => {
      sub.next(stock);
      sub.complete();
    });
  }
}