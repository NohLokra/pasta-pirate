import { Injectable } from '@angular/core';

import { StockModel } from '../models/stock.model';
import { AlimentModel, UNIT_ENUM } from '../models/aliment.model';
import { Observable } from 'rxjs/Observable';
import { IAlimentService } from './aliment.interface';
import { ShoppingListModel } from '../models/shopping-list.model';
import { IngredientModel } from '../models/ingredient.model';

@Injectable()
export class FakeAlimentService implements IAlimentService {
  
  getAliments(): Observable<AlimentModel[]> {
    let alimentsList: AlimentModel[] = [
      {
        id: "507f1f77bcf86cd799439011",
        name: "Oeuf",
        image: "icons/coin.png",
        unit: UNIT_ENUM.UNIT
      },
      {
        id: "507f191e810c19729de860ea",
        name: "Tchoin",
        image: "icons/coin.png",
        unit: UNIT_ENUM.KILO
      },
      {
        id: "zq4qzf486zqf4zf545q6",
        name: "Tomate",
        image: "icons/coin.png",
        unit: UNIT_ENUM.UNIT
      }
    ]
    
    return new Observable(sub => {
      sub.next(alimentsList);
      sub.complete();
    });
  }
}