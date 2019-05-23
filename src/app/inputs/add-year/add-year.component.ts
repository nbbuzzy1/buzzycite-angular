import { Component, ViewChild, ElementRef } from '@angular/core';
import { Inputs } from '../../inputs.service';

@Component({
  selector: 'app-add-year',
  templateUrl: './add-year.component.html',
  styleUrls: ['./add-year.component.sass']
})
export class AddYearComponent {
  @ViewChild('year') year: ElementRef

  constructor(private inputsService: Inputs) {}
  
  setYear() {
    this.inputsService.year = this.year.nativeElement.value
  }
}
