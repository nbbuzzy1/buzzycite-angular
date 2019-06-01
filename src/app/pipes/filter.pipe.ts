import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    return value.filter((citation) => {
      const textMatch = citation[propName].toLowerCase().includes(filterString.toLowerCase());
      return textMatch
    })
  }
}
