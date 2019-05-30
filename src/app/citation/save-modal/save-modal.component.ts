import { Component, OnInit, Inject } from '@angular/core';
import { CitationService } from 'src/app/services/citation.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Citation } from '../../citation.model';
import { Citations } from 'src/app/services/citations.service';

@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.sass']
})
export class SaveModalComponent implements OnInit {
  type: string
  note: string
  constructor(private citationService: CitationService,
              private citationsService: Citations,
              private router: Router,
              public dialogRef: MatDialogRef<SaveModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

  save() {
    this.citationsService.citations.push(new Citation(this.citationService.citation, 0, 'Jan 2, 2018', this.type, this.note))
    this.citationsService.getCitations()
    this.dialogRef.close("It was saved");
    this.router.navigate(['/citation-list'])
  }
}
