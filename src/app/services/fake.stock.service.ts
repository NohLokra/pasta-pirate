import { Injectable } from '@angular/core';

import { IStockService } from './stock.interface';
import { StockModel } from '../models/stock.model';
import { AlimentModel, UNIT_ENUM } from '../models/aliment.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FakeStockService implements IStockService {
  getStock() : Observable<StockModel[]> {
    let stock : StockModel[] = [
      {
        id: "1g5rgtte88qz8g4ki84ef4e",
        aliment: {
          id: "507f1f77bcf86cd799439011",
          name: "Oeuf",
          image: "icons/coin.png",
          unit: UNIT_ENUM.UNIT
        }, 
        quantity: 6
      },
      { 
        id: "897grh8f9qf7g89eq4qg8kt",
        aliment: {
          id: "507f191e810c19729de860ea",
          name: "Tchoin",
          image: "icons/coin.png",
          unit: UNIT_ENUM.KILO
        }, 
        quantity: 35
      }
    ];

    return new Observable(sub => {
      sub.next(stock);
      sub.complete();
    });
  }
}