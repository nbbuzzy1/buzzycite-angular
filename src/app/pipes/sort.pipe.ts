import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: any, sort: string): any {
    if (sort === 'date') {
      return value.sort((a, b) => {
        if (a.createdAt < b.createdAt) {
          return 1;
        } else {
          return -1
        }
      });
    }
    if (sort === 'type') {
      return value.sort((a, b) => {
        if (a.type.toLowerCase() > b.type.toLowerCase()) {
          return 1;
        } else {
          return -1
        }
      });
    }
  }
}
