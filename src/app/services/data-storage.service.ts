import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

import { Citations } from './citations.service';
import { Citation } from '../citation.model';

@Injectable()
export class DataStorageService {
  myCitations = []
  constructor(private http: HttpClient, private citationsService: Citations) {}

  fetchCitations() {
    return this.http.get<{ [key: string]: Citation }>('https://buzzycite-ng.firebaseio.com/citations.json')
    .pipe(map(responseData => {
      const citationsArray = []
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          citationsArray.push({...responseData[key], id: key})
        }
      }
      return citationsArray
    }))
    .subscribe(citations => {
      this.myCitations = citations
      console.log(citations)
    })
  }

  storeCitation(postData: Citation) {
    this.http.post('https://buzzycite-ng.firebaseio.com/citations.json', postData).subscribe()
  }
  deleteCitation() {
    // const deletedCitation = this.citationsService.citations[index]
    this.http.delete('https://buzzycite-ng.firebaseio.com/citations.json').subscribe()
  }
}