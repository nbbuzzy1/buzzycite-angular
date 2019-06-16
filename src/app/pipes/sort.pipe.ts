import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  constructor(private authService: AuthService) {}

  transform(value: any, sort: string) {
    if (sort === 'date') {
      return value.sort((a, b) => {
        if (a.data < b.data) {
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
