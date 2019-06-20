import { Component, OnDestroy } from '@angular/core';

import { Inputs } from '../../services/inputs.service'
import { CitationService } from '../../services/citation.service';

@Component({
  selector: 'app-appeal-pre-print',
  templateUrl: './appeal-pre-print.component.html',
  styleUrls: ['./appeal-pre-print.component.sass']
})

export class AppealPrePrintComponent implements OnDestroy {

  constructor(public inputsService: Inputs,
    public citationService: CitationService) {}

  ngOnDestroy() {
    this.inputsService.removeCitation();
    this.citationService.removeCitation();
  };
};
