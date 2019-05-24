import { Component, ViewChild, ElementRef } from '@angular/core';
import { Inputs } from '../../services/inputs.service';

@Component({
  selector: 'app-add-regional-volume',
  templateUrl: './add-regional-volume.component.html',
  styleUrls: ['./add-regional-volume.component.sass']
})
export class AddRegionalVolumeComponent {
  @ViewChild('regionalVolume') regionalVolume: ElementRef
  @ViewChild('regionalReporter') regionalReporter: ElementRef
  @ViewChild('regionalFirstPage') regionalFirstPage: ElementRef

  constructor(private inputsService: Inputs) {}

  setRegionalVolume() {
    this.inputsService.regionalVolume = this.regionalVolume.nativeElement.value
  }
  setRegionalReporter() {
    this.inputsService.regionalReporter = this.regionalReporter.nativeElement.value
  }
  setRegionalFirstPage() {
    this.inputsService.regionalFirstPage = this.regionalFirstPage.nativeElement.value
  }
}
