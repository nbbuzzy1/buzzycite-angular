import { Component, ViewChild, ElementRef } from '@angular/core';
import { Inputs } from '../../services/inputs.service'

@Component({
  selector: 'app-add-ohio-volume',
  templateUrl: './add-ohio-volume.component.html',
  styleUrls: ['./add-ohio-volume.component.sass']
})
export class AddOhioVolumeComponent {
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
