import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { PlanningModel, MENU_TYPE_ENUM } from '../../models/planning.model';
import { MenuModel } from '../../models/menu.model';
import { PlanningService } from '../../services/planning.service';
import { AlimentModel } from '../../models/aliment.model';
import { AlimentService } from '../../services/aliment.service';
import { IngredientModel } from '../../models/ingredient.model';
import { RecipeModel, RECIPE_TYPE } from '../../models/recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-page-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningPageComponent implements OnInit {

  @ViewChild('planningAddModal')
  planningAddModal : ModalDirective;
  
  plannings: PlanningModel[];

  recipes: RecipeModel[];
  offsetRecipes: number = 0;

  actualPlanningParams: any;

  constructor(
    private _planningService: PlanningService,
    private _recipeService: RecipeService
  ) { }

  ngOnInit() {
    this._planningService.getPlanningForNextDays(new Date(), 5).subscribe(data => {
      this.plannings = data;
    });
  }

  selectedAddRecipe(event) {
    this.actualPlanningParams = event;

    this.offsetRecipes = 0;
    this.getOtherRecipes();

    this.planningAddModal.show();
  }

  clickedRecipe(event: RecipeModel) {
    let planning = this.plannings.find(x =>
      x.date.getDate() == this.actualPlanningParams.day.getDate() &&
      x.date.getMonth() == this.actualPlanningParams.day.getMonth() &&
      x.date.getFullYear() == this.actualPlanningParams.day.getFullYear() &&
      x.menu_type.toLowerCase() == this.actualPlanningParams.menuType
    );

    if (!planning) {
      planning = new PlanningModel();
      planning.date = this.actualPlanningParams.day;
      planning.menu_type = this.actualPlanningParams.menuType;
      planning.menu = new MenuModel();
    }

    if (event.type == RECIPE_TYPE.STARTER)
      planning.menu.starter = event;
    else if (event.type == RECIPE_TYPE.DISH)
      planning.menu.dish = event;
    else if (event.type == RECIPE_TYPE.DESSERT)
      planning.menu.dessert = event;

    this._planningService.savePlanning(planning).subscribe(data => {
      this._planningService.getPlanningForNextDays(new Date(), 5).subscribe(data => {
        this.plannings = data;
      });
    });

    this.planningAddModal.hide();
  }

  getOtherRecipes() {
    this._recipeService.getRecipes({ query: { type: this.actualPlanningParams.recipeType } }, 3, this.offsetRecipes).subscribe(data => {
      this.recipes = data;
      this.offsetRecipes += 3;
    });
  }
}
