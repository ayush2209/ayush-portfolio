import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperCase'
})
export class UpperCasePipe implements PipeTransform {

  transform(value: any): any {
    // Here we can perfen any operation with value, where we will use this pipe we'll get the value.
    return value;
  }

}
