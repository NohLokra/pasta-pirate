import { Injectable } from '@angular/core';

import { IPlanningService } from './planning.interface';
import { StockModel } from '../models/stock.model';
import { AlimentModel, UNIT_ENUM } from '../models/aliment.model';
import { Observable } from 'rxjs/Observable';
import { PlanningModel, MENU_TYPE_ENUM } from '../models/planning.model';
import { RECIPE_TYPE } from '../models/recipe.model';

@Injectable()
export class FakePlanningService implements IPlanningService {
  getPlanningForDate() : Observable<PlanningModel[]> {
    let planning : PlanningModel[] = [
      {
        id: "5zqf5e6g4eqz468fqz6",
        date: new Date(2017, 12, 27, 22, 40),
        menu: {
          id: "2f1qzzqfzq21q5d1",
          dessert: null,
          starter: null,
          dish: {
            id: "5qzd46zqgq8q46f4zq68fqz",
            name: "Salade de tchoins",
            description: "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos soluta aspernatur a odit dignissimos doloremque obcaecati? Quas hic quibusdam at laborum tenetur accusantium error expedita. Numquam maxime similique culpa cum.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum harum temporibus exercitationem, omnis repudiandae delectus beatae saepe voluptate nihil, veritatis sequi ab ullam, iusto quos aperiam sit alias rem fugiat?</p>",
            image: "icons/coin.png",
            ingredients: [
              {
                aliment: {
                  id: "507f1f77bcf86cd799439011",
                  name: "Oeuf",
                  image: "icons/coin.png",
                  unit: UNIT_ENUM.UNIT
                },
                quantity: 2
              },
              {
                aliment: {
                  id: "507f191e810c19729de860ea",
                  name: "Tchoin",
                  image: "icons/coin.png",
                  unit: UNIT_ENUM.KILO
                },
                quantity: 69
              }
            ],
            type: RECIPE_TYPE.DISH
          }
        },
        menu_type: MENU_TYPE_ENUM.BREAKFAST
      }
    ];

    return new Observable(sub => {
      sub.next(planning);
      sub.complete();
    });
  }
}