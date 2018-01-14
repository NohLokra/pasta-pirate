import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { IStockService } from './stock.interface';
import { StockModel } from '../models/stock.model';
import { AlimentModel, UNIT_ENUM } from '../models/aliment.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StockService implements IStockService {

  constructor(
    private _http: HttpClient
  ) { }

  getStock() : Observable<StockModel[]> {
    return this._http.get<StockModel[]>("http://localhost:9000/api/stocks");
  }

  addAlimentToStock(aliment: AlimentModel): Observable<StockModel[]> {
    console.log(aliment);

    return this._http.post<StockModel[]>("http://localhost:9000/api/stocks", null, {
      params: {...aliment}
    });
  }
}
