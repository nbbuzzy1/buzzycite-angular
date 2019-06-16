import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../auth/user.model'
import { Citation } from '../../app/citation.model'

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  userId: string;
  citations: any

  constructor(
      private afAuth: AngularFireAuth,
      private afs: AngularFirestore,
      private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
          // Logged in
        if (user) {
          this.userId = user.uid;
          this.getData()
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )
  }

  async addCitation(citation, date, type, note) {
    const userRef = this.afs.collection(`users/${this.userId}/citations`);
    userRef.add({
      'citation': citation,
      'date': date,
      'type': type,
      'note': note
    })
    this.getData()  
    // await userRef.get().toPromise().then(querySnapshot => {
    //   this.citations = querySnapshot.docs.map(doc => doc.data())
    // })
    // console.log(this.citations[1])

  }

  public async deleteCitation() {
    const userRef = this.afs.collection(`users/${this.userId}/citations`);
    userRef.doc('h3eIajx4sqCmoPLWY5Mr').delete()
    this.getData()
  }
  async getData() {
    const userRef = this.afs.collection(`users/${this.userId}/citations`);
    await userRef.get().toPromise().then(querySnapshot => {
      this.citations = querySnapshot.docs.map(doc => doc.data())
    })
    // console.log(this.citations)
  } 

  // async getData() {
  //   let events = [];
  //   const snapshot = await this.afs.collection(`users/${this.userId}/citations`).get()
  //   snapshot.forEach((doc) => events.push(doc));
  //   console.log(events)
  // }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = { 
      uid: user.uid, 
      email: user.email, 
      displayName: user.displayName, 
      photoURL: user.photoURL
    } 
    return userRef.set(data, { merge: true })

  }

  private setUserCitations(user) {

  }


  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/auth']);
  }
}
