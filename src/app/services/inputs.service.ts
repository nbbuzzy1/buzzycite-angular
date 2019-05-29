import { Injectable } from '@angular/core';
import { AbbreviateService } from '../inputs/add-parties/abbreviate.service';

@Injectable()
export class Inputs {

  constructor(private abbreviateService: AbbreviateService) {}

  partyOne: string
  partyTwo: string
  partiesDisplay: string
  ohioVolume: string
  ohioReporter: string
  ohioFirstPage: number
  regionalVolume: number
  regionalReporter: string
  regionalFirstPage: number
  year: number
  webcite: number
  westlaw: number
  westlawDisplay: string = ''
  lexis: number
  lexisDisplay: string = ''
  county: string
  caseNo: string
  district: string
  month: string
  day: number
  pinpoint: string
  pinpointDisplay: string
  noReset: boolean = true;

  abbreviatePartyOne(party) {
    const modifiedParty = this.abbreviateService.abbreviateParty(party)
    this.partyOne = modifiedParty
  }

  abbreviatePartyTwo(party) {
    const modifiedParty = this.abbreviateService.abbreviateParty(party)
    this.partyTwo = modifiedParty
    if (this.partyOne && this.partyTwo) {
      this.partiesDisplay = `${this.partyOne} v. ${this.partyTwo}`
    }
  }

  setWestlawDisplay(westlaw) {
    this.westlaw = westlaw
    if (this.westlaw) {
      this.westlawDisplay = `WL ${this.westlaw}`
    } else {
      this.westlawDisplay = '';
    }
  }

  setLexisDisplay(lexis) {
    this.lexis = lexis
    if (this.lexis) {
      this.lexisDisplay = `LEXIS ${this.lexis}`;
    } else {
      this.lexisDisplay = '';
    }
  }

  setPostPinpointDisplay() {
    if (this.pinpoint) {
      this.pinpointDisplay = `, ¶ ${this.pinpoint}`
    } else {
      this.pinpointDisplay = ''
    }
  }

  setPrePinpointDisplay() {
    if (this.pinpoint) {
      this.pinpointDisplay = `, ${this.pinpoint}`
    } else {
      this.pinpointDisplay = ''
    }
  }

  setWestlawLexisPinpointDisplay() {
    if (this.pinpoint) {
      this.pinpointDisplay = `, *${this.pinpoint}`
    } else {
      this.pinpointDisplay = ''
    }
  }

  removeCitation() {
    this.partyOne = '';
    this.partyTwo = '';
    this.year = null;
    this.webcite = null;
    this.ohioVolume = null;
    this.ohioReporter = '';
    this.ohioFirstPage = null;
    this.regionalVolume = null;
    this.regionalReporter = '';
    this.regionalFirstPage = null;
    this.westlaw = null;
    this.westlawDisplay = '';
    this.lexis = null;
    this.lexisDisplay = '';
    this.day = null;
    this.month = '';
    this.county = '';
    this.caseNo = '';
    this.district = '';
    this.pinpoint = '';
    this.pinpointDisplay = '';
    this.partiesDisplay = '';
    this.noReset = false;
  }
}