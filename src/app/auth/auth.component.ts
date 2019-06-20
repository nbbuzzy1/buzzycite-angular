import { Component } from '@angular/core';

import { FirebaseService } from '../services/firebase.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent {

  constructor(public firebaseService: FirebaseService) { }

}
