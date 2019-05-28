import { Component } from '@angular/core';
import { Inputs } from '../../services/inputs.service'
import { CitationService } from '../../services/citation.service';

@Component({
  selector: 'app-appeal-pre-print',
  templateUrl: './appeal-pre-print.component.html',
  styleUrls: ['./appeal-pre-print.component.sass']
})
export class AppealPrePrintComponent {

  constructor(private inputsService: Inputs,
    private citationService: CitationService) {}

}
