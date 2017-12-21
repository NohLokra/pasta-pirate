import { Pipe } from '@angular/core';

@Pipe({
  name: 'quantity'
})
export class QuantityPipe {

  transform(value: string): string {
    
    let indexU = value.indexOf("u");

    if (indexU !== -1) return value.substring(0, value.length - 1)

    return value;
  }
}