import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supreme-post',
  templateUrl: './supreme-post.component.html',
  styleUrls: ['./supreme-post.component.css']
})
export class SupremePostComponent implements OnInit {
  partyOne: string;
  partyTwo: string;
  citation: string;
  ohioVolume: number;
  ohioReporter: string = '';
  ohioFirstPage: number;
  regionalVolume: number;
  regionalReporter: string = '';
  regionalFirstPage: number;
  constructor() { }

  ngOnInit() {

  }
  onPartyOneAdded(addedPartyOne) {
    this.partyOne = addedPartyOne;
    console.log(this.partyOne)
  }
}
