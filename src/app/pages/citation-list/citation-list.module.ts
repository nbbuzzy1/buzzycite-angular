import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CitationListComponent } from './citation-list.component';
import { CitationListItemComponent } from './citation-list-item/citation-list-item.component';
import { FilterPipe } from '../../pipes/filter.pipe';
import { SortByPipe } from '../../pipes/sort.pipe';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
    CitationListComponent,
    CitationListItemComponent,
    FilterPipe,
    SortByPipe
  ],
  imports: [CommonModule, FormsModule, AppRoutingModule, SharedModule]
})

export class CitationListModule {}