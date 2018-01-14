import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IPlanningService } from './planning.interface';
import { StockModel } from '../models/stock.model';
import { AlimentModel, UNIT_ENUM } from '../models/aliment.model';
import { Observable } from 'rxjs/Observable';
import { PlanningModel } from '../models/planning.model';

@Injectable()
export class PlanningService implements IPlanningService {

  constructor(
    private _http: HttpClient
  ) { }

  getPlanningForDate(date: Date): Observable<PlanningModel[]> {
    return this._http.get<PlanningModel[]>("http://localhost:9000/api/plannings", {
      params: {
        date: date.toString()
      }
    });
  }

  getPlanningForNextDays(date: Date, numberOfDays: number) : Observable<PlanningModel[]> {
    throw new Error("Method not implemented.");
  }

  getNextDay(days: number): Date {
    throw new Error("Method not implemented.");
  }
}
