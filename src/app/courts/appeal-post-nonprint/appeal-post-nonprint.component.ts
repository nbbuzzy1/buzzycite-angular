import { Component, OnDestroy } from '@angular/core';
import { Inputs } from '../../services/inputs.service';
import { CitationService } from '../../services/citation.service';

@Component({
  selector: 'app-appeal-post-nonprint',
  templateUrl: './appeal-post-nonprint.component.html',
  styleUrls: ['./appeal-post-nonprint.component.sass']
})
export class AppealPostNonprintComponent implements OnDestroy {
  
  constructor(public inputsService: Inputs,
    public citationService: CitationService) {}

  ngOnDestroy() {
    this.inputsService.removeCitation();
    this.citationService.removeCitation();
  }
}
