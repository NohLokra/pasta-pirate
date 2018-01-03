import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { StockModel } from '../../models/stock.model';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  @Input() stocks: StockModel[];

  @Output()
  recipeSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: RecipeModel) {
    console.log("log");
  }

  removeQuantity(stock: StockModel, quantity: number) {
    stock.quantity -= +quantity;

    if (stock.quantity < 0) stock.quantity = 0;
  }

  addQuantity(stock: StockModel, quantity: number) {
    stock.quantity += +quantity;
  }

}
