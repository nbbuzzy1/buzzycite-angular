import { Component, OnInit } from '@angular/core';

import { Citation } from '../../citation.model';
import { Citations } from '../../services/citations.service';

@Component({
  selector: 'app-citation-list',
  templateUrl: './citation-list.component.html',
  styleUrls: ['./citation-list.component.sass']
})
export class CitationListComponent implements OnInit {
  citations: Citation[];
  constructor(private citationsService: Citations) { }

  ngOnInit() {
    this.citations = this.citationsService.getCitations();
  }

}
