import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-ohio-volume',
  templateUrl: './add-ohio-volume.component.html',
  styleUrls: ['./add-ohio-volume.component.css']
})
export class AddOhioVolumeComponent {
  ohioVolume: number;
  ohioReporter: string = '';
  ohioFirstPage: number;
  @Output() ohioVolumeCreated = new EventEmitter<number>();
  @Output() ohioReporterCreated = new EventEmitter<string>();
  @Output() ohioFirstPageCreated = new EventEmitter<number>();
  sendOhioVolume() {
    this.ohioVolumeCreated.emit(this.ohioVolume)
  }
  sendOhioReporter() {
    this.ohioReporterCreated.emit(this.ohioReporter)
  }
  sendOhioFirstPage() {
    this.ohioFirstPageCreated.emit(this.ohioFirstPage)
  }
}
