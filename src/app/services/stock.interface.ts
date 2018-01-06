import { StockModel } from '../models/stock.model';
import { Observable } from 'rxjs/Observable';
import { AlimentModel } from '../models/aliment.model';

export interface IStockService {
  getStock() : Observable<StockModel[]>;
  addAlimentToStock(aliment: AlimentModel) : Observable<StockModel[]>;
}