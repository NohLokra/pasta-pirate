import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeModel, RECIPE_TYPE } from '../models/recipe.model';
import { StockModel } from '../models/stock.model';
import { UNIT_ENUM } from '../models/aliment.model';
import { IRecipeService } from './recipe.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FakeRecipeService implements IRecipeService {

  recipes : RecipeModel[] = [
    {
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
      time: 1200
    },
    {
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
      time: 3600
    }
  ];

  getAll(): Observable<RecipeModel[]> {
    return new Observable(sub => {
      sub.next(this.recipes);
      sub.complete();
    });
  }

  getRecipe(id: string): Observable<RecipeModel> {
    return new Observable(sub => {
      sub.next(this.recipes.find(x => x.id == id));
      sub.complete();
    });
  }

  saveRecipe(recipe: RecipeModel): Observable<RecipeModel> {
    let newId = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 15);

    recipe.id = newId;

    return new Observable(sub => {
      sub.next(recipe);
      sub.complete();
    });
  }

  timeStrToSeconds(time: string): number {
    return +time.split('h')[0] * 60 * 60 + +time.split('h')[1] * 60;
  }

  secondsToTimeStr(time: number): string {
    var date = new Date(null);
    date.setSeconds(time);
    return date.toISOString().substr(11, 5).replace(':', 'h');
  }

  isAlreadyDone(recipe: RecipeModel): boolean {
    return true;
  }
}
