import { StockModel } from '../models/stock.model';
import { Observable } from 'rxjs/Observable';

export interface IStockService {
  getStock() : Observable<StockModel[]>;
}