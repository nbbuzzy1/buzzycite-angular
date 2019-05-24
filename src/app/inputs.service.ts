import { Injectable } from '@angular/core';
import { AbbreviateService } from './inputs/add-parties/abbreviate.service';

@Injectable()
export class Inputs {

  constructor(private abbreviateService: AbbreviateService) {}

  partyOne: string
  partyTwo: string
  ohioVolume: string
  ohioReporter: string
  ohioFirstPage: number
  regionalVolume: number
  regionalReporter: string
  regionalFirstPage: number
  year: number
  webcite: number
  westlaw: number
  westlawDisplay: string
  lexis: number
  lexisDisplay: string
  county: string
  caseNo: string
  district: string
  month: string
  day: number
  pinpoint: string
  pinpointDisplay: string

  abbreviatePartyOne(party) {
    const modifiedParty = this.abbreviateService.abbreviateParty(party)
    this.partyOne = modifiedParty
  }

  abbreviatePartyTwo(party) {
    const modifiedParty = this.abbreviateService.abbreviateParty(party)
    this.partyTwo = modifiedParty
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
  }
}