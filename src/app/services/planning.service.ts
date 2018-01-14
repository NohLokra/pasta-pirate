import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IPlanningService } from './planning.interface';
import { StockModel } from '../models/stock.model';
import { AlimentModel, UNIT_ENUM } from '../models/aliment.model';
import { Observable } from 'rxjs/Observable';
import { PlanningModel, MENU_TYPE_ENUM } from '../models/planning.model';
import { RecipeModel } from '../models/recipe.model';

@Injectable()
export class PlanningService implements IPlanningService {

  constructor(
    private _http: HttpClient
  ) { }

  getPlanningForDate(date: Date): Observable<PlanningModel[]> {
    throw new Error("Method not implemented.");
  }

  getPlanningForDateAndMenuType(date: Date, menuType: MENU_TYPE_ENUM): Observable<PlanningModel[]> {
    throw new Error("Method not implemented.");
  }

  getPlanningForNextDays(date: Date, numberOfDays: number) : Observable<PlanningModel[]> {
    throw new Error("Method not implemented.");
  }

  savePlanning(planning: PlanningModel): Observable<PlanningModel> {
    throw new Error("Method not implemented.");
  }
  
  getNextDay(days: number): Date {
    throw new Error("Method not implemented.");
  }
}