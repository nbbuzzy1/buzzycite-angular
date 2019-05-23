import { Component } from '@angular/core';
import { Inputs } from '../../inputs.service'

@Component({
  selector: 'app-supreme-post',
  templateUrl: './supreme-post.component.html',
  styleUrls: ['./supreme-post.component.sass']
})
export class SupremePostComponent {
  citation: string;
  italicizedCitation: string;
  remainingCitation: string;

  constructor(private inputsService: Inputs) {}

  createCitation() {
    this.italicizedCitation = `${this.inputsService.partyOne} v. ${this.inputsService.partyTwo}`;
    this.remainingCitation = `, ${this.inputsService.ohioVolume} ${this.inputsService.ohioReporter} ${this.inputsService.ohioFirstPage}, ${this.inputsService.year}-Ohio-${this.inputsService.webcite}, ${this.inputsService.regionalVolume} ${this.inputsService.regionalReporter} ${this.inputsService.regionalFirstPage}`;
    this.citation = this.italicizedCitation + this.remainingCitation
      // `${partyOne} v. ${partyTwo}, ${ohioVolume} ${ohioReporter} ${ohioFirstPage}, ${year}-Ohio-${webcite}, ${regionalVolume} ${regionalReporter} ${regionalFirstPage}`;
  }
}