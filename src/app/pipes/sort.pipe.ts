import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {
  constructor(private firebaseService: FirebaseService) {}

  transform(value: any, sort: string) {
    if (this.firebaseService.citations) {
      if (sort === 'date') {
        return value.sort((a, b) => {
          if (a.date < b.date) {
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
}
