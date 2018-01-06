import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { StockModel } from '../../models/stock.model';
import { RecipeModel } from '../../models/recipe.model';
import { IngredientModel } from '../../models/ingredient.model';
import { AlimentService } from '../../services/aliment.service';
import { AlimentModel } from '../../models/aliment.model';
import { StockService } from '../../services/stock.service';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

  @Input() stocks: StockModel[];

  @Output()
  recipeSelected = new EventEmitter();

  @ViewChild('addStockModal')
  addStockModal: ModalDirective;

  alimentNameSelected: string;
  alimentSelected: AlimentModel;
  aliments: AlimentModel[];

  constructor(
    private _ingredientService: AlimentService,
    private _stockService: StockService
  ) { }

  ngOnInit() {
    this._ingredientService.getAliments().subscribe(data => {
      this.aliments = data;
    });
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

  alimentOnSelect(event) {
    this.alimentSelected = event.item;
  }

  addIngredient() {
    this._stockService.addAlimentToStock(this.alimentSelected).subscribe(data => {
      this.stocks = data;

      this.addStockModal.hide();
    });
  }
}
