import { Component, OnDestroy } from '@angular/core';
import { Inputs } from '../../services/inputs.service'
import { CitationService } from 'src/app/services/citation.service';

@Component({
  selector: 'app-supreme-post',
  templateUrl: './supreme-post.component.html',
  styleUrls: ['./supreme-post.component.sass']
})
export class SupremePostComponent implements OnDestroy {

  constructor(private inputsService: Inputs,
              private citationService: CitationService) {}

  ngOnDestroy() {
    this.inputsService.removeCitation();
    this.citationService.removeCitation();
  }
}