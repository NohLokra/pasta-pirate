import { Component, OnInit } from '@angular/core';

import { StockService } from '../../services/stock.service';
import { StockModel } from '../../models/stock.model';
import { RecipeService } from '../../services/recipe.service';
import { RecipeModel } from '../../models/recipe.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ShoppingListModel } from '../../models/shopping-list.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stocks: StockModel[];

  recipe: RecipeModel;

  shoppingList: ShoppingListModel;

  constructor(
    private _stockService: StockService,
    private _recipeService: RecipeService,
    private _shoppingListService: ShoppingListService
  ) { }

  ngOnInit() { 
    this._stockService.getStock().subscribe(data => {
      this.stocks = data;
    });

    this._shoppingListService.getLastShoppingList().subscribe(data => {
      this.shoppingList = data;
    });

    this.selectRecipe("5qzd46zqgq8q46f4zq68fqz");
  }

  selectRecipe(id: string) {
    this._recipeService.getRecipe(id).subscribe(data => {
      this.recipe = data;
    });
  }
}
