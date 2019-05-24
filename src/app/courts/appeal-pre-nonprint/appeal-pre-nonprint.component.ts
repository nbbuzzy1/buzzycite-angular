import { Component } from '@angular/core';
import { Inputs } from '../../services/inputs.service';

@Component({
  selector: 'app-appeal-pre-nonprint',
  templateUrl: './appeal-pre-nonprint.component.html',
  styleUrls: ['./appeal-pre-nonprint.component.sass']
})
export class AppealPreNonprintComponent {
  citation: string;
  italicizedCitation: string;
  remainingCitation: string;
  
  constructor(private inputsService: Inputs) {}

  createCitation() {
    //i.e. Smith v. Smith, 8th Dist. Cuyahoga No. 2343, 2001 WL 234234, *5 (Jan. 1, 2001)
    this.pinpointDisplay()
    this.italicizedCitation = `${this.inputsService.partyOne} v. ${this.inputsService.partyTwo}`;
    this.remainingCitation = `, ${this.inputsService.district} Dist. ${this.inputsService.county} No. ${this.inputsService.caseNo}, ${this.inputsService.year} ${this.inputsService.westlawDisplay}${this.inputsService.lexisDisplay}${this.inputsService.pinpointDisplay} (${this.inputsService.month} ${this.inputsService.day}, ${this.inputsService.year})`;
    this.citation = this.italicizedCitation + this.remainingCitation
  }

  pinpointDisplay() {
    if (this.inputsService.pinpoint) {
      this.inputsService.pinpointDisplay = `, *${this.inputsService.pinpoint}`
    } else {
      this.inputsService.pinpointDisplay = ''
    }
  }
}
