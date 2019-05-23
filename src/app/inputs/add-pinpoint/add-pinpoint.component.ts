import { Component, ViewChild, ElementRef } from '@angular/core';
import { Inputs } from '../../inputs.service';

@Component({
  selector: 'app-add-pinpoint',
  templateUrl: './add-pinpoint.component.html',
  styleUrls: ['./add-pinpoint.component.sass']
})
export class AddPinpointComponent {

  @ViewChild('pinpoint') pinpoint: ElementRef

  constructor(private inputsService: Inputs) {}
  
  setPinpoint() {
    this.inputsService.pinpoint = this.pinpoint.nativeElement.value

    // if (!this.inputsService.pinpoint) {
    //   this.inputsService.pinpointDisplay = '';
    // }
  }
}
