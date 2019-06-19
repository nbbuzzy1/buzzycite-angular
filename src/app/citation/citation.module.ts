import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CitationComponent } from './citation/citation.component';
import { SaveModalComponent } from './save-modal/save-modal.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [CitationComponent, SaveModalComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule],
  exports: [CitationComponent, SaveModalComponent],
  entryComponents: [SaveModalComponent]
})

export class CitationModule {}