import { Component } from '@angular/core';
import { Inputs } from '../../services/inputs.service';

@Component({
  selector: 'app-add-westlaw-lexis',
  templateUrl: './add-westlaw-lexis.component.html',
  styleUrls: ['./add-westlaw-lexis.component.sass']
})
export class AddWestlawLexisComponent {
  // @ViewChild('westlawNo') westlawNo: ElementRef
  // @ViewChild('lexisNo') lexisNo: ElementRef

  constructor(public inputsService: Inputs) {}

  // setWestlawDisplay() {
  //   this.inputsService.westlaw = this.westlawNo.nativeElement.value
  //   if (this.inputsService.westlaw) {
  //     this.inputsService.westlawDisplay = `WL ${this.westlawNo.nativeElement.value}`
  //   } else {
  //     this.inputsService.westlawDisplay = '';
  //   }
  // }
  // setLexisDisplay() {
  //   this.inputsService.lexis = this.lexisNo.nativeElement.value
  //   if (this.inputsService.lexis) {
  //     this.inputsService.lexisDisplay = `LEXIS ${this.lexisNo.nativeElement.value}`;
  //   } else {
  //     this.inputsService.lexisDisplay = '';
  //   }
  // }
}
