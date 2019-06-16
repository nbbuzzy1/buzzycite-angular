import { Component, OnInit, Inject } from '@angular/core';
import { CitationService } from 'src/app/services/citation.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Citation } from '../../citation.model';
import { Citations } from 'src/app/services/citations.service';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.sass']
})
export class SaveModalComponent implements OnInit {
  type: string
  note: string
  date: any
  user$: any
  constructor(private citationService: CitationService,
              private citationsService: Citations,
              private router: Router,
              public dialogRef: MatDialogRef<SaveModalComponent>,
              private authService: AuthService,
              private firebaseService: FirebaseService,
              @Inject(MAT_DIALOG_DATA) public data) {
              this.authService.user$.subscribe(user => this.user$ = user) 
               }

  ngOnInit() {
  }

  save() {
    this.date = new Date()
    this.citationsService.addCitation(new Citation(this.citationService.citation, this.date, this.date, this.type, this.note))
    this.citationsService.getCitations()
    this.dialogRef.close("It was saved");
    this.router.navigate(['/citation-list'])
  }
}
