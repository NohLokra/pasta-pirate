import { Component, OnInit, Input } from '@angular/core';
import { ShoppingListModel } from '../../models/shopping-list.model';
import { ShoppingListIngredientModel } from '../../models/shopping-list-ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  @Input()
  shoppingList: ShoppingListModel;

  @Input() filter: string;

  progression: number;

  constructor() { }

  ngOnInit() {
    this.calculateProgression();
  }

  takeIngredient(ingredient: ShoppingListIngredientModel) {
    ingredient.isTaken = !ingredient.isTaken;

    this.calculateProgression();
  }

  calculateProgression() {
    let numberDone = 0;

    if ( !this.shoppingList ) {
      this.progression = 0;
      return;
    }

    this.shoppingList.ingredients.forEach(ingredient => {
      if (ingredient.isTaken) numberDone++;
    });

    this.progression = Math.floor(numberDone * 100 / this.shoppingList.ingredients.length);

    if (this.progression < 0) this.progression = 0;
    if (this.progression > 100) this.progression = 100;
  }

}
