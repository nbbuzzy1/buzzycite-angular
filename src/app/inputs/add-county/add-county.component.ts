import { Component } from '@angular/core';
import { Inputs } from '../../services/inputs.service'

@Component({
  selector: 'app-add-county',
  templateUrl: './add-county.component.html',
  styleUrls: ['./add-county.component.sass']
})
export class AddCountyComponent {
  constructor(private inputsService: Inputs) {}
}
