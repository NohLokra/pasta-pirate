import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { RecipeModel } from '../../models/recipe.model';
import { StockService } from '../../services/stock.service';
import { StockModel } from '../../models/stock.model';

@Component({
  selector: 'app-page-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipePageComponent implements OnInit {

  recipe_id: string;

  recipe: RecipeModel;
  stocks: StockModel[];

  constructor(
    private _route: ActivatedRoute,
    private _recipeService: RecipeService,
    private _stockService: StockService
  ) { }

  ngOnInit() {
    this.recipe_id = this._route.snapshot.params.id;

    this._recipeService.getRecipe(this.recipe_id).subscribe(data => {
      this.recipe = data;
    });

    this._stockService.getStock().subscribe(data => {
      this.stocks = data;
    });
  }

}
