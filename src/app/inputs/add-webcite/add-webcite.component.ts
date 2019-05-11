import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-webcite',
  templateUrl: './add-webcite.component.html',
  styleUrls: ['./add-webcite.component.sass']
})
export class AddWebciteComponent {
  @Output() webciteCreated = new EventEmitter<number>();
  webcite: number;
  sendWebcite() {
    this.webciteCreated.emit(this.webcite)
  }
}
