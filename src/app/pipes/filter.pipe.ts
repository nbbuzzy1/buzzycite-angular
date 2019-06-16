import { Pipe, PipeTransform } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  constructor(private authService: AuthService) {}

  transform(value: any, filterString: string, propName: string) {
    return value.filter((citation) => {
      const textMatch = citation[propName].toLowerCase().includes(filterString.toLowerCase());
      return textMatch
    })
  }
}
