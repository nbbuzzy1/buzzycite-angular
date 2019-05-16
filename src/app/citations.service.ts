import { Citation } from './citation.model';

export class Citations {
  private citations: Citation[] = [
    new Citation('U.S. v. Virginia', 0, 'Jan 1, 2018', 'Constitutional', 'Good case'),
    new Citation('State v. Smith', 1, 'March 1, 2018', 'Criminal', 'Bad case')
  ]
  getCitations() {
    return this.citations.slice();
  }
}