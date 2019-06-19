import { Component, ViewChild, ElementRef } from '@angular/core';

import { Inputs } from '../../services/inputs.service'

@Component({
  selector: 'app-add-ohio-app-volume',
  templateUrl: './add-ohio-app-volume.component.html',
  styleUrls: ['./add-ohio-app-volume.component.sass']
})
export class AddOhioAppVolumeComponent {
  @ViewChild('ohioReporter', { static: false }) ohioReporter: ElementRef

  constructor(public inputsService: Inputs) {}

  setOhioReporter() {
    this.inputsService.ohioReporter = this.ohioReporter.nativeElement.value
  }
}
