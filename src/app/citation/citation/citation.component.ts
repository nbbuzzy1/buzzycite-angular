import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Inputs } from 'src/app/services/inputs.service';
import { CitationService } from 'src/app/services/citation.service';
import { SaveModalComponent } from '../save-modal/save-modal.component';

@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.sass']
})

export class CitationComponent {
  today: number = Date.now();
  test: string = 'hello';
  
  constructor(public inputsService: Inputs,
              public citationService: CitationService,
              public dialog: MatDialog) {}

  startCopyCitation(citationText) {
    let copyArea = document.getElementById('fullCitation');
    copyArea.innerHTML = citationText;
    copyArea.focus();
    document.execCommand("selectAll");
    document.execCommand("copy");
  };

  onCopyCitation() {
    this.startCopyCitation(`<i>${this.inputsService.partiesDisplay}</i>${this.citationService.remainingCitation}`);
  };
  
  onRemoveCitation() {
    this.inputsService.removeInputs()
    this.citationService.citation = '';
    this.citationService.remainingCitation = '';
    this.citationService.inputsFilled = false;
  };

  onSaveCitation() {
      const dialogRef = this.dialog.open(SaveModalComponent, {
        panelClass: 'modal',
        data: {today: this.today, test: this.test}
      });
      dialogRef.afterClosed().subscribe(result => {});
  };
};
