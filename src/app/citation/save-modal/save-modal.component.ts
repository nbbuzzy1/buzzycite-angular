import { Component, OnInit, Inject } from '@angular/core';
import { CitationService } from 'src/app/services/citation.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.sass']
})
export class SaveModalComponent implements OnInit {

  constructor(private citationService: CitationService,
    public dialogRef: MatDialogRef<SaveModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  save() {
    this.dialogRef.close("It was saved");
  }
}
