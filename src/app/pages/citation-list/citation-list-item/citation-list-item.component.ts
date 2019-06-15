import { Component, OnInit, Input } from '@angular/core';
import { Citation } from 'src/app/citation.model';
import { Citations } from 'src/app/services/citations.service';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-citation-list-item',
  templateUrl: './citation-list-item.component.html',
  styleUrls: ['./citation-list-item.component.sass']
})
export class CitationListItemComponent implements OnInit {
  @Input() citation: Citation
  @Input() index: number
  constructor(private citationsService: Citations,
              private dataStorageService: DataStorageService) { }

  ngOnInit() {
    // console.log(this.citationsService.citations)
    // console.log(this.index)
  }
  deleteCitation() {
    this.citationsService.deleteCitation(this.index)
    this.dataStorageService.deleteCitation()
  }
}
