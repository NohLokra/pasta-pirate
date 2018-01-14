import { Pipe, PipeTransform } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Pipe({
  name: 'realRecipeTime'
})
export class RealRecipeTimePipe implements PipeTransform {

  constructor(private _recipeService: RecipeService) {

  }

  transform(value: any, args?: any): any {
    return this._recipeService.secondsToTimeStr(value);
  }

}
