import { Component, OnInit, Input } from '@angular/core';
import { Citation } from 'src/app/citation.model';
import { Citations } from 'src/app/services/citations.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-citation-list-item',
  templateUrl: './citation-list-item.component.html',
  styleUrls: ['./citation-list-item.component.sass']
})
export class CitationListItemComponent implements OnInit {
  @Input() citation
  @Input() index: number
  constructor(private citationsService: Citations,
              private authService: AuthService) { }

  ngOnInit() {
    // console.log(this.citationsService.citations)
    // console.log(this.index)
  }
  onDeleteCitation() {
    this.authService.deleteCitation()
  }
}
