import { Component, ViewChild, ElementRef, Output } from '@angular/core';
import { Inputs } from '../../services/inputs.service'

@Component({
  selector: 'app-add-ohio-volume',
  templateUrl: './add-ohio-volume.component.html',
  styleUrls: ['./add-ohio-volume.component.sass']
})
export class AddOhioVolumeComponent {
  @ViewChild('ohioReporter') ohioReporter: ElementRef

  constructor(private inputsService: Inputs) {}

  setOhioReporter() {
    this.inputsService.ohioReporter = this.ohioReporter.nativeElement.value
  }

}
