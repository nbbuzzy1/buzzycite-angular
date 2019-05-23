import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-supreme-pre',
  templateUrl: './supreme-pre.component.html',
  styleUrls: ['./supreme-pre.component.sass']
})
export class SupremePreComponent {

  @ViewChild('f') citationForm: NgForm
  submitted = false;
  // defaultSubscription = 'Basic'
  user = {
    partyOne: '',
    partyTwo: '',
    ohioVolume: '',
    ohioReporter: '',
    ohioFirstPage: ''
  }

  onSubmit() {
    this.submitted = true;
    this.user.partyOne = this.citationForm.value.partyOne
    this.user.partyTwo = this.citationForm.value.partyTwo
    this.user.ohioVolume = this.citationForm.value.ohioVolume
    this.user.ohioReporter = this.citationForm.value.ohioReporter
    this.user.ohioFirstPage = this.citationForm.value.ohioFirstPage
    // this.citationForm.reset();
    console.log(this.citationForm)
  }
}
