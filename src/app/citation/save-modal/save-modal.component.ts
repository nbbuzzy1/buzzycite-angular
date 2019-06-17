import { Component, OnInit, Inject } from '@angular/core';
import { CitationService } from 'src/app/services/citation.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Citation } from '../../citation.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.sass']
})
export class SaveModalComponent implements OnInit {
  type: string = ''
  note: string = ''
  date: any
  // user$: any
  constructor(private citationService: CitationService,
              private router: Router,
              public dialogRef: MatDialogRef<SaveModalComponent>,
              public firebaseService: FirebaseService,
              @Inject(MAT_DIALOG_DATA) public data) {}

  ngOnInit() {
  }

  save() {
    this.date = new Date()
    let citation: Citation = {
      citation: this.citationService.citation,
      date: this.date,
      type: this.type,
      note: this.note
    }
    this.firebaseService.addCitation(citation)
    this.dialogRef.close("It was saved");
    this.router.navigate(['/citation-list'])
  }
}
