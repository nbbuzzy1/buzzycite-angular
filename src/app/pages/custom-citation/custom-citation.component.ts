import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Citations } from '../../services/citations.service'
import { Citation } from '../../citation.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-custom-citation',
  templateUrl: './custom-citation.component.html',
  styleUrls: ['./custom-citation.component.sass']
})
export class CustomCitationComponent implements OnInit {
  customCitation: FormGroup
  date: any
  constructor( private authService: AuthService,
                private router: Router) { }

  ngOnInit() {
    this.customCitation = new FormGroup({
      'citation': new FormControl('', Validators.required),
      'type': new FormControl(''),
      'note': new FormControl(''),
    })
  }
  onSubmit() {
    this.date = new Date()
    let citation: Citation = {
      citation: this.customCitation.value.citation,
      date: this.date,
      type: this.customCitation.value.type,
      note: this.customCitation.value.note
    }
    this.authService.addCitation(citation)
    this.router.navigate(['/citation-list'])
  }
}
