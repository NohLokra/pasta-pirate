import { Component, OnInit } from '@angular/core';
import { StockModel } from '../../models/stock.model';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-page-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})
export class StockPageComponent implements OnInit {

  stocks: StockModel[];

  searchedAlimentName: string;

  constructor(
    private _stockService: StockService
  ) { }

  ngOnInit() {
    this._stockService.getStock().subscribe(data => {
      this.stocks = data;
    });
  }

}
