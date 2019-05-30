import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Citations } from '../../services/citations.service'
import { Citation } from '../../citation.model';

@Component({
  selector: 'app-custom-citation',
  templateUrl: './custom-citation.component.html',
  styleUrls: ['./custom-citation.component.sass']
})
export class CustomCitationComponent implements OnInit {
  customCitation: FormGroup
  constructor( private citationsService: Citations,
                private router: Router) { }

  ngOnInit() {
    this.customCitation = new FormGroup({
      'citation': new FormControl('', Validators.required),
      'type': new FormControl(''),
      'note': new FormControl(''),
    })
  }
  onSubmit() {
    this.citationsService.citations.push(new Citation(this.customCitation.value.citation, 0, 'Jan 1, 2018', this.customCitation.value.type, this.customCitation.value.note))
    this.citationsService.getCitations()
    this.router.navigate(['/citation-list'])
  }
}
