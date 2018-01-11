import { Component, OnInit } from '@angular/core';
import { PlanningModel, MENU_TYPE_ENUM } from '../../models/planning.model';
import { MenuModel } from '../../models/menu.model';
import { PlanningService } from '../../services/planning.service';

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

    console.dir(this.plannings);
  }

}
