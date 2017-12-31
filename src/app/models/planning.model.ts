import { MenuModel } from './menu.model';

export class PlanningModel {
  id: string;
  date: Date;
  menu_type: MENU_TYPE_ENUM;
  menu: MenuModel;
}

export enum MENU_TYPE_ENUM {
  BREAKFAST = "breakfast",
  LUNCH = "lunch",
  DINNER = "dinner"
}