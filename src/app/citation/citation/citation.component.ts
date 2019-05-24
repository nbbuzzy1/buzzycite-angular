import { Component, Input } from '@angular/core';
import { Inputs } from 'src/app/services/inputs.service';

@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.sass']
})
export class CitationComponent {
  @Input() citation: string;
  @Input() italicizedCitation: string;
  @Input() remainingCitation: string;

  constructor(private inputsService: Inputs) {}

  startCopyCitation(citationText) {
    let copyArea = document.getElementById('fullCitation');
    copyArea.innerHTML = citationText;
    copyArea.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
  };

  onCopyCitation() {
    this.startCopyCitation(`<i>${this.italicizedCitation}</i>${this.remainingCitation}`);
  }
  
  onRemoveCitation() {
    this.inputsService.removeCitation()
    this.citation = '';
  }
}
