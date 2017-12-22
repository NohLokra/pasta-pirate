import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

import { RecipeModel } from '../../models/recipe.model';
import { StockModel } from '../../models/stock.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, OnChanges {

  @Input()
  recipe: RecipeModel;

  @Input()
  stocks: StockModel[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.checkIngredients();
  }

  checkIngredients() {
    this.recipe.ingredients.forEach(ingredient => {
      let alimentStock = this.stocks.find(x => x.aliment.id == ingredient.aliment.id);

      if (alimentStock && alimentStock.quantity >= ingredient.quantity) {
        ingredient.isInStock = true;
      }
    });
  }

}
