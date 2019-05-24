import { Component, ViewChild, ElementRef } from '@angular/core';
import { Inputs } from '../../services/inputs.service'

@Component({
  selector: 'app-add-ohio-app-volume',
  templateUrl: './add-ohio-app-volume.component.html',
  styleUrls: ['./add-ohio-app-volume.component.sass']
})
export class AddOhioAppVolumeComponent {
  @ViewChild('ohioVolume') ohioVolume: ElementRef
  @ViewChild('ohioReporter') ohioReporter: ElementRef
  @ViewChild('ohioFirstPage') ohioFirstPage: ElementRef

  constructor(private inputsService: Inputs) {}

  setOhioVolume() {
    this.inputsService.ohioVolume = this.ohioVolume.nativeElement.value
  }
  setOhioReporter() {
    this.inputsService.ohioReporter = this.ohioReporter.nativeElement.value
  }
  setOhioFirstPage() {
    this.inputsService.ohioFirstPage = this.ohioFirstPage.nativeElement.value
  }
}
