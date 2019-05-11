import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.sass']
})
export class CitationComponent {
  @Input() displayCitation: string;
  citationStatus: boolean = false;
  showCitation() {
    this.citationStatus = true;
  }
}
