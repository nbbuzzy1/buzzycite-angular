import { Component } from '@angular/core';

import { Inputs } from '../../services/inputs.service';

@Component({
  selector: 'app-add-pinpoint',
  templateUrl: './add-pinpoint.component.html',
  styleUrls: ['./add-pinpoint.component.sass']
})

export class AddPinpointComponent {

  constructor(public inputsService: Inputs) {}
};
