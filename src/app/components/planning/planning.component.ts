import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RecipeModel } from '../../models/recipe.model';
import { PlanningModel } from '../../models/planning.model';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  @Input()
  plannings: PlanningModel[];

  @Output()
  recipeSelected = new EventEmitter<RecipeModel>();

  constructor() { }

  ngOnInit() {
  }

  selectRecipe(recipe: RecipeModel) {
    console.log("log");
  }

}
