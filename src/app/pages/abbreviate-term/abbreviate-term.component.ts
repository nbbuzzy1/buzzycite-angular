import { Component } from '@angular/core';
import { AbbreviateService } from '../../inputs/add-parties/abbreviate.service';

@Component({
  selector: 'app-abbreviate-term',
  templateUrl: './abbreviate-term.component.html',
  styleUrls: ['./abbreviate-term.component.sass'],
  providers: [AbbreviateService]
})
export class AbbreviateTermComponent {
  fullTerm: string = '';
  abbTerm: string = '';

  constructor(private abbreviateService: AbbreviateService) { }

  abbreviateTerm() {
    this.abbTerm = this.abbreviateService.abbreviateParty(this.fullTerm)
  };
};
