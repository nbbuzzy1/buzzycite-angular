import { Component, ViewChild, ElementRef } from '@angular/core';
import { Inputs } from '../../services/inputs.service';

@Component({
  selector: 'app-add-regional-volume',
  templateUrl: './add-regional-volume.component.html',
  styleUrls: ['./add-regional-volume.component.sass']
})
export class AddRegionalVolumeComponent {
  @ViewChild('regionalReporter') regionalReporter: ElementRef

  constructor(private inputsService: Inputs) {}

  setRegionalReporter() {
    this.inputsService.regionalReporter = this.regionalReporter.nativeElement.value
  }
}
