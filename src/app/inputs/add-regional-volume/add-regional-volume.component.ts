import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-regional-volume',
  templateUrl: './add-regional-volume.component.html',
  styleUrls: ['./add-regional-volume.component.sass']
})
export class AddRegionalVolumeComponent {
  regionalVolume: number;
  regionalReporter: string = '';
  regionalFirstPage: number;
  @Output() regionalVolumeCreated = new EventEmitter<number>();
  @Output() regionalReporterCreated = new EventEmitter<string>();
  @Output() regionalFirstPageCreated = new EventEmitter<number>();
  sendRegionalVolume() {
    this.regionalVolumeCreated.emit(this.regionalVolume)
  }
  sendRegionalReporter() {
    this.regionalReporterCreated.emit(this.regionalReporter)
  }
  sendRegionalFirstPage() {
    this.regionalFirstPageCreated.emit(this.regionalFirstPage)
  }
}
