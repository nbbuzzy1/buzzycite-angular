import { Component } from '@angular/core';

import { Inputs } from 'src/app/services/inputs.service';

@Component({
  selector: 'app-add-parties',
  templateUrl: './add-parties.component.html',
  styleUrls: ['./add-parties.component.sass']
})

export class AddPartiesComponent {
  partyOne: string;
  partyTwo: string;

  constructor(public inputsService: Inputs) {}
};
