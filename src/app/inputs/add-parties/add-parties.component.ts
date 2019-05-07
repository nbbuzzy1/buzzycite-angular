import { Component, Output, EventEmitter } from '@angular/core';

import { AbbreviateService } from './abbreviate.service';

@Component({
  selector: 'app-add-parties',
  templateUrl: './add-parties.component.html',
  styleUrls: ['./add-parties.component.css'],
  providers: [AbbreviateService]
})
export class AddPartiesComponent {
  @Output() partyOneCreated = new EventEmitter<string>();
  @Output() partyTwoCreated = new EventEmitter<string>();
  partyOne: string = '';
  partyTwo: string = '';

  constructor(private abbreviateService: AbbreviateService) {}

  sendPartyOne() {
    const modifiedParty = this.abbreviateService.abbreviateParty(this.partyOne)
    this.partyOneCreated.emit(modifiedParty)
  }
  sendPartyTwo() {
    const modifiedParty = this.abbreviateService.abbreviateParty(this.partyTwo)
    this.partyTwoCreated.emit(modifiedParty)
  }
}
