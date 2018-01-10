import { Component, OnInit, Input } from '@angular/core';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Input() recipes: RecipeModel[];

  @Input() filter: string;

  constructor() { }

  ngOnInit() {
  }

}
