import { RecipeModel } from '../models/recipe.model';
import { Observable } from 'rxjs/Observable';
import { PlanningModel, MENU_TYPE_ENUM } from '../models/planning.model';

export interface IPlanningService {
  getPlanningForDate(date: Date): Observable<PlanningModel[]>;
  getPlanningForDateAndMenuType(date: Date, menuType: MENU_TYPE_ENUM): Observable<PlanningModel[]>;
  getPlanningForNextDays(date: Date, numberOfDays: number): Observable<PlanningModel[]>;
  savePlanning(planning: PlanningModel): Observable<PlanningModel>;
  getNextDay(days: number): Date;
}