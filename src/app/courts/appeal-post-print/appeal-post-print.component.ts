import { Component } from '@angular/core';
import { Inputs } from '../../services/inputs.service'

@Component({
  selector: 'app-appeal-post-print',
  templateUrl: './appeal-post-print.component.html',
  styleUrls: ['./appeal-post-print.component.sass']
})
export class AppealPostPrintComponent {
  citation: string;
  italicizedCitation: string;
  remainingCitation: string;

  constructor(private inputsService: Inputs) {}

  createCitation() {
    //i.e. Smith v. Smith, 234 Ohio App.3d, 2012-Ohio-1234, 423 N.E.3d (8th Dist.)
    this.pinpointDisplay()
    this.italicizedCitation = `${this.inputsService.partyOne} v. ${this.inputsService.partyTwo}`;
    this.remainingCitation = `, ${this.inputsService.ohioVolume} ${this.inputsService.ohioReporter} ${this.inputsService.ohioFirstPage}, ${this.inputsService.year}-Ohio-${this.inputsService.webcite}, ${this.inputsService.regionalVolume} ${this.inputsService.regionalReporter} ${this.inputsService.regionalFirstPage} (${this.inputsService.district} Dist.)${this.inputsService.pinpointDisplay}`;
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
