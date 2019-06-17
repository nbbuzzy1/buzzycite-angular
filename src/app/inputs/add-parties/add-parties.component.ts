import { Component } from '@angular/core';

import { Inputs } from 'src/app/services/inputs.service';

@Component({
  selector: 'app-add-parties',
  templateUrl: './add-parties.component.html',
  styleUrls: ['./add-parties.component.sass']
})
export class AddPartiesComponent {

  constructor(public inputsService: Inputs) {}

}
