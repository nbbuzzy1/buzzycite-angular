import { Pipe, PipeTransform } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private firebaseService: FirebaseService) {}

  transform(value: any, filterString: string, propName: string) {
    if (this.firebaseService.citations) {
      return value.filter((citation) => {
        const textMatch = citation[propName].toLowerCase().includes(filterString.toLowerCase());
        return textMatch
      })
    }
  }
}
