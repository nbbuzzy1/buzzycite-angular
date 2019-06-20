import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { Citation } from '../../citation/citation.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-citation-list',
  templateUrl: './citation-list.component.html',
  styleUrls: ['./citation-list.component.sass']
})

export class CitationListComponent implements OnInit {
  citations: Citation[];
  subscription: Subscription
  filterString = ''
  @ViewChild('sort', { static: false }) sort: ElementRef
  modifiedSort = 'date';
  loadedCitations

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  setSortFilter() {
    this.modifiedSort = this.sort.nativeElement.value
  }
}


