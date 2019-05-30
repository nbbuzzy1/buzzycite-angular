import { Injectable } from '@angular/core';
import { Inputs } from './inputs.service';

@Injectable()
export class CitationService {

  constructor(private inputsService: Inputs) {}

  citation: string = '';
  remainingCitation: string = '';
  inputsFilled: boolean;

  createSupremePostCitation() {
    // `${partyOne} v. ${partyTwo}, ${ohioVolume} ${ohioReporter} ${ohioFirstPage}, ${year}-Ohio-${webcite}, ${regionalVolume} ${regionalReporter} ${regionalFirstPage}`;
    this.validateSupremePostCitation();
    this.inputsService.setPostPinpointDisplay();
    this.remainingCitation = `, ${this.inputsService.ohioVolume} ${this.inputsService.ohioReporter} ${this.inputsService.ohioFirstPage}, ${this.inputsService.year}-Ohio-${this.inputsService.webcite}, ${this.inputsService.regionalVolume} ${this.inputsService.regionalReporter} ${this.inputsService.regionalFirstPage}${this.inputsService.pinpointDisplay}`;
    this.assembleCitation();
  }

  createSupremePreCitation() {
    // `${partyOne} v. ${partyTwo}, ${ohioVolume} ${ohioReporter} ${ohioFirstPage}, ${year}-Ohio-${webcite}, ${regionalVolume} ${regionalReporter} ${regionalFirstPage}`;
    this.validateSupremePreCitation();
    this.inputsService.setPrePinpointDisplay();
    this.remainingCitation = `, ${this.inputsService.ohioVolume} ${this.inputsService.ohioReporter} ${this.inputsService.ohioFirstPage}${this.inputsService.pinpointDisplay}, ${this.inputsService.regionalVolume} ${this.inputsService.regionalReporter} ${this.inputsService.regionalFirstPage} (${this.inputsService.year})`;
    this.assembleCitation();
  }

  createAppealPostPrintCitation() {
    //i.e. Smith v. Smith, 234 Ohio App.3d, 2012-Ohio-1234, 423 N.E.3d (8th Dist.)
    this.validateAppealPostPrintCitation()
    this.inputsService.setPostPinpointDisplay();
    this.remainingCitation = `, ${this.inputsService.ohioVolume} ${this.inputsService.ohioReporter} ${this.inputsService.ohioFirstPage}, ${this.inputsService.year}-Ohio-${this.inputsService.webcite}, ${this.inputsService.regionalVolume} ${this.inputsService.regionalReporter} ${this.inputsService.regionalFirstPage} (${this.inputsService.district} Dist.)${this.inputsService.pinpointDisplay}`;
    this.assembleCitation();
  }

  createAppealPostNonprintCitation() {
    //i.e. Smith v. Smith, 8th Dist. Cuyahoga No. 2343, 2001-Ohio-2334, ¶ 23
    this.validateAppealPostNonprintCitation();
    this.inputsService.setPostPinpointDisplay();
    this.remainingCitation = `, ${this.inputsService.district} Dist. ${this.inputsService.county} No. ${this.inputsService.caseNo}, ${this.inputsService.year}-Ohio-${this.inputsService.webcite}${this.inputsService.pinpointDisplay}`;
    this.assembleCitation();
  }

  createAppealPrePrintCitation() {
    //i.e. Smith v. Smith, 234 Ohio App.3d 45, 46-47, 423 N.E.3d 87 (8th Dist.2002)
    this.validateAppealPrePrintCitation();
    this.inputsService.setPrePinpointDisplay();
    this.remainingCitation = `, ${this.inputsService.ohioVolume} ${this.inputsService.ohioReporter} ${this.inputsService.ohioFirstPage}${this.inputsService.pinpointDisplay}, ${this.inputsService.regionalVolume} ${this.inputsService.regionalReporter} ${this.inputsService.regionalFirstPage} (${this.inputsService.district} Dist.${this.inputsService.year})`;
    this.assembleCitation();
  }

  createAppealPreNonprintCitation() {
    //i.e. Smith v. Smith, 8th Dist. Cuyahoga No. 2343, 2001 WL 234234, *5 (Jan. 1, 2001)
    this.validateAppealPreNonprintCitation()
    this.inputsService.setWestlawLexisPinpointDisplay();
    this.remainingCitation = `, ${this.inputsService.district} Dist. ${this.inputsService.county} No. ${this.inputsService.caseNo}, ${this.inputsService.year} ${this.inputsService.westlawDisplay}${this.inputsService.lexisDisplay}${this.inputsService.pinpointDisplay} (${this.inputsService.month} ${this.inputsService.day}, ${this.inputsService.year})`;
    this.assembleCitation();
  }

  assembleCitation() {
    this.citation = this.inputsService.partiesDisplay + this.remainingCitation;
  }

  removeCitation() {
    this.citation = '';
    this.remainingCitation = '';
    this.inputsFilled = false;
  }

  validateSupremePostCitation() {
    if (this.inputsService.partyOne && this.inputsService.partyTwo && this.inputsService.ohioVolume
      && this.inputsService.ohioReporter && this.inputsService.ohioFirstPage && this.inputsService.year
      && this.inputsService.webcite && this.inputsService.regionalVolume && this.inputsService.regionalReporter
      && this.inputsService.regionalFirstPage) {
        this.inputsFilled = true;
    } else {
      this.inputsFilled = false;
    }
  }

  validateSupremePreCitation() {
    if (this.inputsService.partyOne && this.inputsService.partyTwo && this.inputsService.ohioVolume
      && this.inputsService.ohioReporter && this.inputsService.ohioFirstPage && this.inputsService.year
      && this.inputsService.regionalVolume && this.inputsService.regionalReporter
      && this.inputsService.regionalFirstPage) {
        this.inputsFilled = true;
    } else {
      this.inputsFilled = false;
    }
  } 
  
  validateAppealPostPrintCitation() {
    if (this.inputsService.partyOne && this.inputsService.partyTwo && this.inputsService.ohioVolume
      && this.inputsService.ohioReporter && this.inputsService.ohioFirstPage && this.inputsService.year
      && this.inputsService.webcite && this.inputsService.regionalVolume && this.inputsService.regionalReporter
      && this.inputsService.regionalFirstPage && this.inputsService.district) {
        this.inputsFilled = true;
    } else {
      this.inputsFilled = false;
    }
  }

  validateAppealPostNonprintCitation() {
    if (this.inputsService.partyOne && this.inputsService.partyTwo && this.inputsService.county
      && this.inputsService.caseNo && this.inputsService.year && this.inputsService.webcite 
      && this.inputsService.district) {
        this.inputsFilled = true;
    } else {
      this.inputsFilled = false;
    }
  }

  validateAppealPrePrintCitation() {
    if (this.inputsService.partyOne && this.inputsService.partyTwo && this.inputsService.ohioVolume
      && this.inputsService.ohioReporter && this.inputsService.ohioFirstPage && this.inputsService.year
      && this.inputsService.regionalVolume && this.inputsService.regionalReporter
      && this.inputsService.regionalFirstPage && this.inputsService.district) {
        this.inputsFilled = true;
    } else {
      this.inputsFilled = false;
    }
  }

  validateAppealPreNonprintCitation() {
    if (this.inputsService.partyOne && this.inputsService.partyTwo && this.inputsService.county
      && this.inputsService.caseNo && this.inputsService.year && this.inputsService.month && this.inputsService.day
      && this.inputsService.district && (this.inputsService.westlaw || this.inputsService.lexis)) {
        this.inputsFilled = true;
    } else {
      this.inputsFilled = false;
    }
  }

}