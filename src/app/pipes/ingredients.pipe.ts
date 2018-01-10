import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ingredients'
})
export class IngredientsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let finalString = "";

    for (let i = 0; i < value.length; i++) {
      if (i == 0) {
        finalString += value[i].aliment.name + ", ";
      } else {
        finalString += value[i].aliment.name.toLowerCase() + ", ";
      }
    }

    finalString = finalString.charAt(0).toUpperCase() + finalString.slice(1);

    finalString = finalString.slice(0, -2);

    finalString += ".";

    return finalString;
  }

}
