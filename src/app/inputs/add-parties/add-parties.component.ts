import { Component, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-parties',
  templateUrl: './add-parties.component.html',
  styleUrls: ['./add-parties.component.css']
})
export class AddPartiesComponent implements OnInit {
  @Output() partyOneCreated = new EventEmitter<string>();
  @Output() partyTwoCreated = new EventEmitter<string>();
  partyOne: string = '';
  partyTwo: string = '';
  sendParty() {
    this.partyOneCreated.emit(this.partyOne)
    this.partyTwoCreated.emit(this.partyTwo)
  }
  ngOnInit() {

  }
}
