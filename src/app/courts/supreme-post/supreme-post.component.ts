import { Component } from '@angular/core';

@Component({
  selector: 'app-supreme-post',
  templateUrl: './supreme-post.component.html',
  styleUrls: ['./supreme-post.component.sass']
})
export class SupremePostComponent {
  citation: string;
  italicizedCitation: string;
  remainingCitation: string;
  createCitation(
    partyOne,
    partyTwo, 
    ohioVolume, 
    ohioReporter,
    ohioFirstPage,
    regionalVolume,
    regionalReporter,
    regionalFirstPage,
    webcite,
    year) {
    this.italicizedCitation = `${partyOne} v. ${partyTwo}`;
    this.remainingCitation = `, ${ohioVolume} ${ohioReporter} ${ohioFirstPage}, ${year}-Ohio-${webcite}, ${regionalVolume} ${regionalReporter} ${regionalFirstPage}`;
    this.citation = this.italicizedCitation + this.remainingCitation
      // `${partyOne} v. ${partyTwo}, ${ohioVolume} ${ohioReporter} ${ohioFirstPage}, ${year}-Ohio-${webcite}, ${regionalVolume} ${regionalReporter} ${regionalFirstPage}`;
  }
}