import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// import { AuthService } from './auth.service';

@Injectable({
 providedIn: 'root'
})
export class FirebaseService {
  userCollection: AngularFirestoreCollection = this.afs.collection('users')

 constructor(private afs: AngularFirestore) { }

 private handleError(res: HttpErrorResponse) {
  console.error(res);
  return throwError(res.error || 'Server error');
 }
}