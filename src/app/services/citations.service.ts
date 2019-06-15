import { Subject } from 'rxjs';

import { Citation } from '../citation.model';

export class Citations {
  citationsChanged = new Subject<Citation[]>()
  citations: Citation[] = [
    new Citation('U.S. v. Virginia', 0, 'Jan 1, 2018', 'Constitutional Law Test', 'Good case'),
    new Citation('State v. Smith', 1, 'March 1, 2018', 'Criminal', 'Bad case'),
    new Citation('State v. Nick', 1, 'March 1, 2018', 'Criminal', 'Bad case'),
    new Citation('State v. Buzzy', 1, 'March 1, 2018', 'Criminal', 'Bad case')
  ]
  getCitations() {
    return this.citations.slice();
  }

  addCitation(citation: Citation) {
    this.citations.push(citation)
    this.citationsChanged.next(this.citations.slice());
  }

  deleteCitation(index) {
    this.citations.splice(index, 1);
    this.citationsChanged.next(this.citations.slice())
  }

}