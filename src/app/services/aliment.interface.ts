import { Observable } from 'rxjs/Observable';
import { AlimentModel } from '../models/aliment.model';

export interface IAlimentService {
  getAliments(): Observable<AlimentModel[]>;
}