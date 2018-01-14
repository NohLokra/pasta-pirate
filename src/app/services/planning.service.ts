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
    let result = new Observable<PlanningModel[]>();

    for ( let i = 0 ; i < numberOfDays ; i++ ) {
      let request = this._http.get("http://localhost:9000/api/plannings")
      result = Rx.Observable.merge(result, request);
    }

    return result;
  }

  getNextDay(days: number): Date {
    let today = new Date();
    today.setDate(today.getDate() + days);

    return today;
  }
}
