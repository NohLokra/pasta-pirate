import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { PlanningModel, MENU_TYPE_ENUM } from '../../models/planning.model';
import { MenuModel } from '../../models/menu.model';
import { PlanningService } from '../../services/planning.service';
import { AlimentModel } from '../../models/aliment.model';
import { AlimentService } from '../../services/aliment.service';
import { IngredientModel } from '../../models/ingredient.model';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-page-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningPageComponent implements OnInit {
  
  plannings: PlanningModel[];

  constructor(
    private _planningService: PlanningService
  ) { }

  ngOnInit() {
    this._planningService.getPlanningForNextDays(new Date(), 5).subscribe(data => {
      this.plannings = data;
    });
  }
}
