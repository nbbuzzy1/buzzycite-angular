import { Component, Input } from '@angular/core';

import { FirebaseService } from 'src/app/services/firebase.service';
import { Citation } from 'src/app/citation/citation.model';

@Component({
  selector: 'app-citation-list-item',
  templateUrl: './citation-list-item.component.html',
  styleUrls: ['./citation-list-item.component.sass']
})
export class CitationListItemComponent {
  @Input() citation: Citation;
  @Input() index: number;

  constructor(private firebaseService: FirebaseService) { }

  onDeleteCitation(event, citation) {
    this.firebaseService.deleteCitation(citation)
  };
  
};
