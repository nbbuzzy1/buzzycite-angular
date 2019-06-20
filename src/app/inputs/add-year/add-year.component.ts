import { Component } from '@angular/core';

import { Inputs } from '../../services/inputs.service';

@Component({
  selector: 'app-add-year',
  templateUrl: './add-year.component.html',
  styleUrls: ['./add-year.component.sass']
})

export class AddYearComponent {

  constructor(public inputsService: Inputs) {}
};
