import { Component } from '@angular/core';
import { Inputs } from '../../services/inputs.service'
import { CitationService } from '../../services/citation.service'

@Component({
  selector: 'app-supreme-pre',
  templateUrl: './supreme-pre.component.html',
  styleUrls: ['./supreme-pre.component.sass']
})
export class SupremePreComponent {

  constructor(private inputsService: Inputs,
    private citationService: CitationService) {}

}
