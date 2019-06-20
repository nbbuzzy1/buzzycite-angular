import { Component, OnDestroy } from '@angular/core';

import { Inputs } from '../../services/inputs.service';
import { CitationService } from '../../services/citation.service';

@Component({
  selector: 'app-appeal-pre-nonprint',
  templateUrl: './appeal-pre-nonprint.component.html',
  styleUrls: ['./appeal-pre-nonprint.component.sass']
})

export class AppealPreNonprintComponent implements OnDestroy {
  
  constructor(public inputsService: Inputs,
              public citationService: CitationService) {}

  ngOnDestroy() {
    this.inputsService.removeCitation();
    this.citationService.removeCitation();
  };
};
