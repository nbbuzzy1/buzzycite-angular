import { Component, OnInit, Input } from '@angular/core';
import { Citation } from 'src/app/citation.model';

@Component({
  selector: 'app-citation-list-item',
  templateUrl: './citation-list-item.component.html',
  styleUrls: ['./citation-list-item.component.sass']
})
export class CitationListItemComponent implements OnInit {
  @Input() citation: Citation
  constructor() { }

  ngOnInit() {
  }

}
