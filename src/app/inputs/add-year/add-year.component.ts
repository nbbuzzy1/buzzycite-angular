import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-year',
  templateUrl: './add-year.component.html',
  styleUrls: ['./add-year.component.sass']
})
export class AddYearComponent {
  @Output() yearCreated = new EventEmitter<number>();
  year: number;
  sendYear() {
    this.yearCreated.emit(this.year)
  }
}
