import { Component, ViewChild, ElementRef } from '@angular/core';
import { Inputs } from '../../services/inputs.service';

@Component({
  selector: 'app-add-month-day',
  templateUrl: './add-month-day.component.html',
  styleUrls: ['./add-month-day.component.sass']
})
export class AddMonthDayComponent {
  @ViewChild('month') month: ElementRef

  constructor(private inputsService: Inputs) {}

  setMonth() {
    this.inputsService.month = this.month.nativeElement.value
  }
}
