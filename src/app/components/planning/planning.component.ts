import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { RecipeModel } from '../../models/recipe.model';
import { PlanningModel, MENU_TYPE_ENUM } from '../../models/planning.model';
import { PlanningService } from '../../services/planning.service';
import { MenuModel } from '../../models/menu.model';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {

  @Input()
  plannings: PlanningModel[];

  @Input()
  recipeSelected: RecipeModel;

  @Input()
  numberOfDays: number = 5;

  @Output()
  selectedRecipe = new EventEmitter<RecipeModel>();

  days: Date[];

  constructor(
    private _planningService: PlanningService
  ) { }

  ngOnInit() {
    this.days = [];

    for (let i = 0; i < this.numberOfDays; i++) {
      this.days.push(this._planningService.getNextDay(i));
    }

    console.log(this.plannings);
  }

  selectRecipe(recipe: RecipeModel) {
    this.selectedRecipe.emit(recipe);
  }

  menuEnumKeys() {
    var keys = Object.keys(MENU_TYPE_ENUM).map(x => x.toLowerCase());
    return keys;
  }

  getPlanningForDayAndMenuType(date: Date, menu_type: MENU_TYPE_ENUM) : PlanningModel {
    let result = this.plannings.find(x => 
      x.date.getDate() == date.getDate() && 
      x.date.getMonth() == date.getMonth() && 
      x.date.getFullYear() == date.getFullYear() && 
      x.menu_type.toLowerCase() == menu_type
    );
    
    return result;
  }
}
