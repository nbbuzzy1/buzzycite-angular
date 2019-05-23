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
  westlaw: string
  lexis: string
  county: string
  district: string
  month: string
  day: number
  pinpoint: number

  abbreviatePartyOne(party) {
    const modifiedParty = this.abbreviateService.abbreviateParty(party)
    this.partyOne = modifiedParty
    return this.partyOne
  }
  abbreviatePartyTwo(party) {
    const modifiedParty = this.abbreviateService.abbreviateParty(party)
    this.partyTwo = modifiedParty
    return this.partyTwo
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
    this.westlaw = '';
    this.lexis = '';
    this.day = null;
    this.month = '';
    this.county = '';
    this.district = '';
    this.pinpoint = null;
  }
}