import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { RecipeModel } from '../../models/recipe.model';

@Component({
  selector: 'app-page-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListPageComponent implements OnInit {

  recipes: RecipeModel[];

  searchedAlimentName: string;

  constructor(
    private _recipeService: RecipeService
  ) { }

  ngOnInit() {
    this._recipeService.getAll().subscribe(data => {
      this.recipes = data;
    });
  }

}
