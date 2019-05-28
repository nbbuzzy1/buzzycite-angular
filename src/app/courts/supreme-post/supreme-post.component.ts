import { Component } from '@angular/core';
import { Inputs } from '../../services/inputs.service'
import { CitationService } from 'src/app/services/citation.service';

@Component({
  selector: 'app-supreme-post',
  templateUrl: './supreme-post.component.html',
  styleUrls: ['./supreme-post.component.sass']
})
export class SupremePostComponent {
  // citation: string;
  // italicizedCitation: string;
  // remainingCitation: string;

  constructor(private inputsService: Inputs,
              private citationService: CitationService) {}

  // createCitation() {
  //   this.pinpointDisplay()
  //   this.italicizedCitation = `${this.inputsService.partyOne} v. ${this.inputsService.partyTwo}`;
  //   this.remainingCitation = `, ${this.inputsService.ohioVolume} ${this.inputsService.ohioReporter} ${this.inputsService.ohioFirstPage}, ${this.inputsService.year}-Ohio-${this.inputsService.webcite}, ${this.inputsService.regionalVolume} ${this.inputsService.regionalReporter} ${this.inputsService.regionalFirstPage}${this.inputsService.pinpointDisplay}`;
  //   this.citation = this.italicizedCitation + this.remainingCitation
  // }

  // validateInputs() {
  //   if (this.inputsService.partyOne && this.inputsService.partyTwo) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  
  // pinpointDisplay() {
  //   if (this.inputsService.pinpoint) {
  //     this.inputsService.pinpointDisplay = `, ¶ ${this.inputsService.pinpoint}`
  //   } else {
  //     this.inputsService.pinpointDisplay = ''
  //   }
  // }
}