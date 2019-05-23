import { Component } from '@angular/core';
import { Inputs } from '../../inputs.service'

@Component({
  selector: 'app-appeal-post-nonprint',
  templateUrl: './appeal-post-nonprint.component.html',
  styleUrls: ['./appeal-post-nonprint.component.sass']
})
export class AppealPostNonprintComponent {
  citation: string;
  italicizedCitation: string;
  remainingCitation: string;
  
  constructor(private inputsService: Inputs) {}

  createCitation() {
    //i.e. Smith v. Smith, 8th Dist. Cuyahoga No. 2343, 2001-Ohio-2334, ¶ 23
    this.pinpointDisplay()
    this.italicizedCitation = `${this.inputsService.partyOne} v. ${this.inputsService.partyTwo}`;
    this.remainingCitation = `, ${this.inputsService.district} Dist. ${this.inputsService.county} No. ${this.inputsService.caseNo}, ${this.inputsService.year}-Ohio-${this.inputsService.webcite}${this.inputsService.pinpointDisplay}`;
    this.citation = this.italicizedCitation + this.remainingCitation
  }

  pinpointDisplay() {
    if (this.inputsService.pinpoint) {
      this.inputsService.pinpointDisplay = `, ¶ ${this.inputsService.pinpoint}`
    } else {
      this.inputsService.pinpointDisplay = ''
    }
  }
}
