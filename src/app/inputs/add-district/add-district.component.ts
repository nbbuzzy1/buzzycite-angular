import { Component, ViewChild, ElementRef } from '@angular/core';
import { Inputs } from '../../services/inputs.service';

@Component({
  selector: 'app-add-district',
  templateUrl: './add-district.component.html',
  styleUrls: ['./add-district.component.sass']
})
export class AddDistrictComponent {
  @ViewChild('district', { static: false }) district: ElementRef

  constructor(public inputsService: Inputs) {}

  setDistrict() {
    this.inputsService.district = this.district.nativeElement.value
  }
}
