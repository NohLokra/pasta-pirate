import { Component, OnInit } from '@angular/core';

import { StockService } from '../../services/stock.service';
import { StockModel } from '../../models/stock.model';
import { RecipeService } from '../../services/recipe.service';
import { RecipeModel } from '../../models/recipe.model';
import { ShoppingListService } from '../../services/shopping-list.service';
import { ShoppingListModel } from '../../models/shopping-list.model';
import { PlanningService } from '../../services/planning.service';
import { PlanningModel } from '../../models/planning.model';
import { IngredientModel } from '../../models/ingredient.model';
import { ShoppingListIngredientModel } from '../../models/shopping-list-ingredient.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  plannings: PlanningModel[];

  stocks: StockModel[];

  recipe: RecipeModel;

  shoppingList: ShoppingListModel;

  constructor(
    private _stockService: StockService,
    private _recipeService: RecipeService,
    private _shoppingListService: ShoppingListService,
    private _planningService: PlanningService
  ) { }

  ngOnInit() { 
    this._stockService.getStock().subscribe(data => {
      this.stocks = data;
    });

    this._shoppingListService.getLastShoppingList().subscribe(data => {
      this.shoppingList = data;
    });

    this._planningService.getPlanningForDate(new Date()).subscribe(data => {
      this.plannings = data;
    });

    this.selectRecipe("5qzd46zqgq8q46f4zq68fqz");
  }

  selectRecipe(id: string) {
    this._recipeService.getRecipe(id).subscribe(data => {
      this.recipe = data;
    });
  }

  selectedRecipe(recipe: RecipeModel) {
	  this.selectRecipe(recipe.id);
  }

  addedIngredient(ingredient: IngredientModel) {
    let addedIngredient = this.shoppingList.ingredients.find(x => x.aliment.id == ingredient.aliment.id);
    let stockedIngredient = this.stocks.find(x => x.aliment.id == ingredient.aliment.id);
    
    let numberToAdd = ingredient.quantity;
    if (stockedIngredient) {
      numberToAdd -= stockedIngredient.quantity;
    }

    if (addedIngredient) {
      addedIngredient.quantity += numberToAdd;
      return;
    }

    let shoppingListIngredient = new ShoppingListIngredientModel();
    shoppingListIngredient.aliment = ingredient.aliment;
    shoppingListIngredient.quantity = numberToAdd;
    shoppingListIngredient.isTaken = false;

    this.shoppingList.ingredients.push(shoppingListIngredient);
  }
}
