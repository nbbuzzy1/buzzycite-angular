import { Component, OnInit, Input } from '@angular/core';
import { Citation } from 'src/app/citation.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-citation-list-item',
  templateUrl: './citation-list-item.component.html',
  styleUrls: ['./citation-list-item.component.sass']
})
export class CitationListItemComponent implements OnInit {
  @Input() citation
  @Input() index: number
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
  }
  onDeleteCitation(event, citation) {
    this.firebaseService.deleteCitation(citation)
  }
}
