import { Component } from '@angular/core';
import { Inputs } from '../../services/inputs.service';
import { CitationService } from '../../services/citation.service';

@Component({
  selector: 'app-appeal-post-nonprint',
  templateUrl: './appeal-post-nonprint.component.html',
  styleUrls: ['./appeal-post-nonprint.component.sass']
})
export class AppealPostNonprintComponent {
  
  constructor(private inputsService: Inputs,
    private citationService: CitationService) {}

}
