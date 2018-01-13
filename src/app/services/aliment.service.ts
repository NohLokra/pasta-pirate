import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IAlimentService } from './aliment.interface';
import { AlimentModel } from '../models/aliment.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AlimentService implements IAlimentService {

  constructor(
    private _http: HttpClient
  ) { }

  getAliments(): Observable<AlimentModel[]> {
    return this._http.get<any>('http://localhost:9000/api/aliments');
  }
}
