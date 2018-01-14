import { Component, OnInit } from '@angular/core';
import { ShoppingListModel } from '../../models/shopping-list.model';
import { ShoppingListService } from '../../services/shopping-list.service';

@Component({
  selector: 'app-page-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListPageComponent implements OnInit {

  shoppingList: ShoppingListModel;

  searchedAlimentName: string;

  constructor(
    private _shoppingListService: ShoppingListService
  ) { }

  ngOnInit() {
    this._shoppingListService.getLastShoppingList().subscribe(data => {
      this.shoppingList = data;
    });
  }

}
