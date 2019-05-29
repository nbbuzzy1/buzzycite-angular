import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inputs } from 'src/app/services/inputs.service';
import { CitationService } from 'src/app/services/citation.service';
import { SaveModalComponent } from '../save-modal/save-modal.component';

@Component({
  selector: 'app-citation',
  templateUrl: './citation.component.html',
  styleUrls: ['./citation.component.sass']
})
export class CitationComponent {

  constructor(private inputsService: Inputs,
              private citationService: CitationService,
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
  }
  
  onRemoveCitation() {
    this.inputsService.removeCitation()
    this.citationService.citation = '';
    this.citationService.remainingCitation = '';
    this.citationService.inputsFilled = false;
  }

  onSaveCitation() {
      const dialogRef = this.dialog.open(SaveModalComponent, {
        width: '250px',
        // data: {name: this.name, animal: this.animal}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    
  }
}
