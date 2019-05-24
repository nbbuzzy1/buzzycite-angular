import { Component } from '@angular/core';
import { Inputs } from '../../inputs.service'

@Component({
  selector: 'app-appeal-pre-print',
  templateUrl: './appeal-pre-print.component.html',
  styleUrls: ['./appeal-pre-print.component.sass']
})
export class AppealPrePrintComponent {
  citation: string;
  italicizedCitation: string;
  remainingCitation: string;

  constructor(private inputsService: Inputs) {}

  createCitation() {
    //i.e. Smith v. Smith, 234 Ohio App.3d 45, 46-47, 423 N.E.3d 87 (8th Dist.2002)
    this.pinpointDisplay()
    this.italicizedCitation = `${this.inputsService.partyOne} v. ${this.inputsService.partyTwo}`;
    this.remainingCitation = `, ${this.inputsService.ohioVolume} ${this.inputsService.ohioReporter} ${this.inputsService.ohioFirstPage}${this.inputsService.pinpointDisplay}, ${this.inputsService.regionalVolume} ${this.inputsService.regionalReporter} ${this.inputsService.regionalFirstPage} (${this.inputsService.district} Dist.${this.inputsService.year})`;
    this.citation = this.italicizedCitation + this.remainingCitation
  }

  pinpointDisplay() {
    if (this.inputsService.pinpoint) {
      this.inputsService.pinpointDisplay = `, ${this.inputsService.pinpoint}`
    } else {
      this.inputsService.pinpointDisplay = ''
    }
  }

}
