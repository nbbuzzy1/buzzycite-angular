import { Component, Input } from '@angular/core';
import { Inputs } from 'src/app/services/inputs.service';
import { CitationService } from 'src/app/services/citation.service';

@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.sass']
})
export class CitationComponent {

  constructor(private inputsService: Inputs,
              private citationService: CitationService) {}

  startCopyCitation(citationText) {
    let copyArea = document.getElementById('fullCitation');
    copyArea.innerHTML = citationText;
    copyArea.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
  };

  onCopyCitation() {
    this.startCopyCitation(`<i>${this.citationService.italicizedCitation}</i>${this.citationService.remainingCitation}`);
  }
  
  onRemoveCitation() {
    this.inputsService.removeCitation()
    this.citationService.citation = '';
  }
}
