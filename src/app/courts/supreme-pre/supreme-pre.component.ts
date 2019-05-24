import { Component } from '@angular/core';
import { Inputs } from '../../services/inputs.service'

@Component({
  selector: 'app-supreme-pre',
  templateUrl: './supreme-pre.component.html',
  styleUrls: ['./supreme-pre.component.sass']
})
export class SupremePreComponent {
  citation: string;
  italicizedCitation: string;
  remainingCitation: string;

  constructor(private inputsService: Inputs) {}

  createCitation() {
    this.pinpointDisplay()
    this.italicizedCitation = `${this.inputsService.partyOne} v. ${this.inputsService.partyTwo}`;
    this.remainingCitation = `, ${this.inputsService.ohioVolume} ${this.inputsService.ohioReporter} ${this.inputsService.ohioFirstPage}${this.inputsService.pinpointDisplay}, ${this.inputsService.regionalVolume} ${this.inputsService.regionalReporter} ${this.inputsService.regionalFirstPage} (${this.inputsService.year})`;
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
