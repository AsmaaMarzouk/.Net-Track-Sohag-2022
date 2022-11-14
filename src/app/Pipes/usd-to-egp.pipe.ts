import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToEgp'
})
export class UsdToEgpPipe implements PipeTransform {

  transform(value: number,currentRate:number=20): number {
    // return value*23;
    return value*currentRate;
  }

}
