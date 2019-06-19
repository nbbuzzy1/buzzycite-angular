import { Component, ViewChild, ElementRef } from '@angular/core';

import { Inputs } from '../../services/inputs.service';

@Component({
  selector: 'app-add-regional-volume',
  templateUrl: './add-regional-volume.component.html',
  styleUrls: ['./add-regional-volume.component.sass']
})
export class AddRegionalVolumeComponent {
  @ViewChild('regionalReporter', { static: false }) regionalReporter: ElementRef

  constructor(public inputsService: Inputs) {}

  setRegionalReporter() {
    this.inputsService.regionalReporter = this.regionalReporter.nativeElement.value
  }
}
