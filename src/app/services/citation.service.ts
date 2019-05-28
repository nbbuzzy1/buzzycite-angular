import { Injectable } from '@angular/core';
import { Inputs } from './inputs.service';

@Injectable()
export class CitationService {

  constructor(private inputsService: Inputs) {}

  citation: string = '';
  italicizedCitation: string = ''
  remainingCitation: string = '';

  createSupremePostCitation() {
    // `${partyOne} v. ${partyTwo}, ${ohioVolume} ${ohioReporter} ${ohioFirstPage}, ${year}-Ohio-${webcite}, ${regionalVolume} ${regionalReporter} ${regionalFirstPage}`;
    if (this.inputsService.pinpoint) {
      this.inputsService.pinpointDisplay = `, ¶ ${this.inputsService.pinpoint}`
    } else {
      this.inputsService.pinpointDisplay = ''
    }
    this.italicizedCitation = `${this.inputsService.partyOne} v. ${this.inputsService.partyTwo}`
    this.remainingCitation = `, ${this.inputsService.ohioVolume} ${this.inputsService.ohioReporter} ${this.inputsService.ohioFirstPage}, ${this.inputsService.year}-Ohio-${this.inputsService.webcite}, ${this.inputsService.regionalVolume} ${this.inputsService.regionalReporter} ${this.inputsService.regionalFirstPage}${this.inputsService.pinpointDisplay}`;
    this.citation = this.italicizedCitation + this.remainingCitation
  }
}