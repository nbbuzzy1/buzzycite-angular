import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByType'
})
export class SortByTypePipe implements PipeTransform {

  transform(value: any, propName: string): any {
    return value.sort((a, b) => {
      if (a[propName] > b[propName]) {
        return 1;
      } else {
        return -1
      }
    });
  }
}
