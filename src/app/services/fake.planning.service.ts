import { Injectable } from '@angular/core';

import { IPlanningService } from './planning.interface';
import { StockModel } from '../models/stock.model';
import { AlimentModel, UNIT_ENUM } from '../models/aliment.model';
import { Observable } from 'rxjs/Observable';
import { PlanningModel, MENU_TYPE_ENUM } from '../models/planning.model';
import { RECIPE_TYPE } from '../models/recipe.model';

@Injectable()
export class FakePlanningService implements IPlanningService {
  planning : PlanningModel[] = [
    {
      id: "5zqf5e6g4eqz468fqz6",
      date: new Date(),
      menu: {
        id: "2f1qzzqfzq21q5d1",
        dessert: null,
        starter: {
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
          type: RECIPE_TYPE.STARTER,
          time: 0.3334
        },
        dish: {
          id: "q6f8e4gqzf4eg68fsef4848z",
          name: "Pizza aux tchoins",
          description: "<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos soluta aspernatur a odit dignissimos doloremque obcaecati? Quas hic quibusdam at laborum tenetur accusantium error expedita. Numquam maxime similique culpa cum.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum harum temporibus exercitationem, omnis repudiandae delectus beatae saepe voluptate nihil, veritatis sequi ab ullam, iusto quos aperiam sit alias rem fugiat?</p>",
          image: "icons/coin.png",
          ingredients: [
            {
              aliment: {
                id: "zq4qzf486zqf4zf545q6",
                name: "Tomate",
                image: "icons/coin.png",
                unit: UNIT_ENUM.UNIT
              },
              quantity: 6
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
          type: RECIPE_TYPE.STARTER,
          time: 1
        }
      },
      menu_type: MENU_TYPE_ENUM.BREAKFAST
    },
    {
      id: "z8z7q87fq8z9qz8f9",
      date: new Date(),
      menu: {
        id: "3efeihf474nihfqh",
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
          type: RECIPE_TYPE.DISH,
          time: 0.3334
        }
      },
      menu_type: MENU_TYPE_ENUM.LUNCH
    },
    {
      id: "534eqz53f8f72yhfefs",
      date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1),
      menu: {
        id: "3efeihf474nihfqh",
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
          type: RECIPE_TYPE.DISH,
          time: 0.3334
        }
      },
      menu_type: MENU_TYPE_ENUM.LUNCH
    }
  ];

  getPlanningForDate() : Observable<PlanningModel[]> {
    return new Observable(sub => {
      sub.next(this.planning);
      sub.complete();
    });
  }

  getPlanningForNextDays(date: Date, numberOfDays: number) : Observable<PlanningModel[]> {
    return new Observable(sub => {
      sub.next(this.planning);
      sub.complete();
    });
  }

  getNextDay(days: number): Date {
    let today = new Date();
    today.setDate(today.getDate() + days);
    return today;
  }
}
