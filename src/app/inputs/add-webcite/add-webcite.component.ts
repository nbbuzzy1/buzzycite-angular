import { Component } from '@angular/core';
import { Inputs } from '../../services/inputs.service';

@Component({
  selector: 'app-add-webcite',
  templateUrl: './add-webcite.component.html',
  styleUrls: ['./add-webcite.component.sass']
})
export class AddWebciteComponent {
  constructor(private inputsService: Inputs) {}
  
}
