import { Pipe, PipeTransform } from '@angular/core';
import { MENU_TYPE_ENUM } from '../models/planning.model';

@Pipe({
  name: 'menuType'
})
export class MenuTypePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case MENU_TYPE_ENUM.BREAKFAST:
        return "Petit-déjeuner";

      case MENU_TYPE_ENUM.LUNCH:
        return "Déjeuner";

      case MENU_TYPE_ENUM.DINNER:
        return "Diner";
    
      default:
        return "Petit-déjeuner";
    }
  }

}
