import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { AbbreviateService } from './abbreviate.service';
import { Inputs } from 'src/app/services/inputs.service';

@Component({
  selector: 'app-add-parties',
  templateUrl: './add-parties.component.html',
  styleUrls: ['./add-parties.component.sass'],
  // providers: [AbbreviateService]
})
export class AddPartiesComponent {
  @ViewChild('partyOne') partyOne: ElementRef
  @ViewChild('partyTwo') partyTwo: ElementRef

  constructor(private inputsService: Inputs) {}

  setPartyOne() {
    this.inputsService.abbreviatePartyOne(this.partyOne.nativeElement.value)
  }
  setPartyTwo() {
    this.inputsService.abbreviatePartyTwo(this.partyTwo.nativeElement.value)
  }
}
