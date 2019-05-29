import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-custom-citation',
  templateUrl: './custom-citation.component.html',
  styleUrls: ['./custom-citation.component.sass']
})
export class CustomCitationComponent implements OnInit {
  customCitation: FormGroup
  constructor() { }

  ngOnInit() {
    this.customCitation = new FormGroup({
      'citation': new FormControl('', Validators.required),
      'type': new FormControl(''),
      'note': new FormControl(''),
    })
  }
  onSubmit() {
    console.log(this.customCitation.value.citation)
    console.log(this.customCitation.value.type)
    console.log(this.customCitation.value.note)
  }
}
