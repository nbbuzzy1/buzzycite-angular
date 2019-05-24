import { Component, ViewChild, ElementRef } from '@angular/core';
import { Inputs } from '../../services/inputs.service';

@Component({
  selector: 'app-add-webcite',
  templateUrl: './add-webcite.component.html',
  styleUrls: ['./add-webcite.component.sass']
})
export class AddWebciteComponent {
  @ViewChild('webcite') webcite: ElementRef

  constructor(private inputsService: Inputs) {}
  
  setWebcite() {
    this.inputsService.webcite = this.webcite.nativeElement.value
  }
}
