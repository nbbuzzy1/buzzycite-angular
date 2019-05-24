import { Component, ViewChild, ElementRef } from '@angular/core';
import { Inputs } from '../../services/inputs.service'

@Component({
  selector: 'app-add-county',
  templateUrl: './add-county.component.html',
  styleUrls: ['./add-county.component.sass']
})
export class AddCountyComponent {
  @ViewChild('county') county: ElementRef
  @ViewChild('caseNo') caseNo: ElementRef

  constructor(private inputsService: Inputs) {}

  setCounty() {
    this.inputsService.county = this.county.nativeElement.value
  }
  setCaseNo() {
    this.inputsService.caseNo = this.caseNo.nativeElement.value
  }
}
