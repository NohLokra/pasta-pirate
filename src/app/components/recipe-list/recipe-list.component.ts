import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';
import { AlimentService } from '../../services/aliment.service';
import { IngredientModel } from '../../models/ingredient.model';
import { AlimentModel } from '../../models/aliment.model';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @ViewChild('planningAddModal')
  planningAddModal: ModalDirective;

  @Input() recipes: RecipeModel[];

  @Input() filter: string;

  newRecipe: RecipeModel;
  newRecipeTime: string = "";

  alimentNameSelected: string;
  alimentSelected: AlimentModel;
  aliments: AlimentModel[];

  constructor(
    private _alimentService: AlimentService,
    private _recipeService: RecipeService
  ) { }

  ngOnInit() {
    this.newRecipe = new RecipeModel();
    this.newRecipe.ingredients = [];
    this.newRecipe.alreadyDone = false;
    this.newRecipe.image = "icons/coin.png";

    this._alimentService.getAliments().subscribe(data => {
      this.aliments = data;
    });
  }

  alimentOnSelect(event) {
    let newIngredient = new IngredientModel();
    newIngredient.aliment = event.item;
    newIngredient.quantity = 1;

    this.alimentNameSelected = "";

    this.newRecipe.ingredients.push(newIngredient);
  }

  selectedAddRecipe() {
    this.planningAddModal.show();
  }

  changeTime(time: string) {
    if (time.match(/\d\dh\d\d/) == null || time.length != 5) {
      return;
    }
    if (+time.match(/\d\d/)[0] > 23 || +time.match(/\d\d/)[1] > 59) {
      return;
    }

    this.newRecipe.time = this._recipeService.timeStrToSeconds(time);
  }

  saveRecipe() {
    this.newRecipe.description.replace('\n', "<br>");

    this._recipeService.saveRecipe(this.newRecipe).subscribe(data => {
      this.recipes.push(data);

      this.newRecipe = new RecipeModel();
      this.newRecipe.ingredients = [];
      this.newRecipe.alreadyDone = false;
      this.newRecipe.image = "icons/coin.png";

      this.planningAddModal.hide();
    });
  }
}
