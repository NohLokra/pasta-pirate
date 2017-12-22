import { Component, OnInit } from '@angular/core';

import { StockService } from '../../services/stock.service';
import { StockModel } from '../../models/stock.model';
import { RecipeService } from '../../services/recipe.service';
import { RecipeModel } from '../../models/recipe.model';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stocks: StockModel[];
  recipe: RecipeModel;

  recipeStock: any[];

  constructor(
    private _stockService: StockService,
    private _recipeService: RecipeService
  ) { }

  ngOnInit() { 
    this._stockService.getStock().subscribe(data => {
      this.stocks = data;
    });

    this.recipeStock = [];

    this.selectRecipe("5qzd46zqgq8q46f4zq68fqz");
  }

  selectRecipe(id: string) {
    this._recipeService.getRecipe(id).subscribe(data => {
      this.recipe = data;

      this.recipe.ingredients.forEach(ingredient => {
        let alimentStock = this.stocks.find(x => x.aliment.id == ingredient.aliment.id);

        if (alimentStock && alimentStock.quantity >= ingredient.quantity) {
          ingredient.isInStock = true;
        }
      });
    });
  }
}
