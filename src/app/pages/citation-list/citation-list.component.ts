import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Citation } from '../../citation.model';
import { Citations } from '../../services/citations.service';

@Component({
  selector: 'app-citation-list',
  templateUrl: './citation-list.component.html',
  styleUrls: ['./citation-list.component.sass']
})
export class CitationListComponent implements OnInit {
  citations: Citation[];
  subscription: Subscription
  filterString = ''
  constructor(private citationsService: Citations) { }

  ngOnInit() {
    this.subscription = this.citationsService.citationsChanged
    .subscribe(
      (citations: Citation[]) => {
        this.citations = citations
      }
    )
    this.citations = this.citationsService.getCitations();
  }

}
