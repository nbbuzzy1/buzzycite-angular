import { Component } from '@angular/core';

@Component({
  selector: 'app-supreme-post',
  templateUrl: './supreme-post.component.html',
  styleUrls: ['./supreme-post.component.css']
})
export class SupremePostComponent {
  citation: string;
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
    this.citation = 
      `${partyOne} v. ${partyTwo}, ${ohioVolume} ${ohioReporter} ${ohioFirstPage}, ${year}-Ohio-${webcite}, ${regionalVolume} ${regionalReporter} ${regionalFirstPage}`;
    return this.citation;
  }
}

  // onPartyOneAdded(addedPartyOne) {
  //   this.partyOnee = addedPartyOne;
  //   console.log(this.partyOnee)
  // }