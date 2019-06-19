import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SupremePostComponent } from './supreme-post/supreme-post.component';
import { SupremePreComponent } from './supreme-pre/supreme-pre.component';
import { AppealPostPrintComponent } from './appeal-post-print/appeal-post-print.component';
import { AppealPostNonprintComponent } from './appeal-post-nonprint/appeal-post-nonprint.component';
import { AppealPreNonprintComponent } from './appeal-pre-nonprint/appeal-pre-nonprint.component';
import { AppealPrePrintComponent } from './appeal-pre-print/appeal-pre-print.component';
import { InputsModule } from '../inputs/inputs.module';
import { SharedModule } from '../shared.module';
import { CitationModule } from '../citation/citation.module';

@NgModule({
  declarations: [
    SupremePostComponent,
    SupremePreComponent,
    AppealPostPrintComponent,
    AppealPostNonprintComponent,
    AppealPreNonprintComponent,
    AppealPrePrintComponent
  ],
  imports: [CommonModule, FormsModule, InputsModule, SharedModule, CitationModule],
})

export class CourtsModule {}