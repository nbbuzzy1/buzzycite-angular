import { Component } from '@angular/core';

import { Inputs } from '../../services/inputs.service';

@Component({
  selector: 'app-add-westlaw-lexis',
  templateUrl: './add-westlaw-lexis.component.html',
  styleUrls: ['./add-westlaw-lexis.component.sass']
})
export class AddWestlawLexisComponent {
  lexis: string;
  westlaw: string;

  constructor(public inputsService: Inputs) {}

}
