import { Component, OnDestroy } from '@angular/core';
import { Inputs } from '../../services/inputs.service'
import { CitationService } from '../../services/citation.service';

@Component({
  selector: 'app-appeal-post-print',
  templateUrl: './appeal-post-print.component.html',
  styleUrls: ['./appeal-post-print.component.sass']
})
export class AppealPostPrintComponent implements OnDestroy {

  constructor(private inputsService: Inputs,
    private citationService: CitationService) {}

  ngOnDestroy() {
    this.inputsService.removeCitation();
    this.citationService.removeCitation();
  }
}
