export class AlimentModel {
  id: string;
  name: string;
  image: string;
  unit: UNIT_ENUM;
}

export enum UNIT_ENUM {
  GRAMME = "g",
  KILO = "Kg",
  LITER = "L",
  UNIT = "u"
}