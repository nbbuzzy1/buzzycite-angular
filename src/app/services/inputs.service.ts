import { Injectable } from '@angular/core';
import { AbbreviateService } from '../inputs/add-parties/abbreviate.service';

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

  setOhioVolume(ohioVolume) {
    this.ohioVolume = ohioVolume
  }

  setOhioFirstPage(ohioFirstPage) {
    this.ohioFirstPage = ohioFirstPage
  }

  setRegionalVolume(regionalVolume) {
    this.regionalVolume = regionalVolume
  }

  setRegionalFirstPage(regionalFirstPage) {
    this.regionalFirstPage = regionalFirstPage
  }

  setYear(year) {
    this.year = year
  }

  setDay(day) {
    this.day = day
  }

  setWebcite(webcite) {
    this.webcite = webcite
  }

  setCounty(county) {
    this.county = county
  }

  setCaseNo(caseNo) {
    this.caseNo = caseNo
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