import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../auth/user.model'
import { Citation } from '../../app/citation.model'

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  userId: string;
  citations

  constructor(
      private afAuth: AngularFireAuth,
      public afs: AngularFirestore,
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

  async addCitation(citation: Citation) {
    const userRef = this.afs.collection(`users/${this.userId}/citations`);
    userRef.add(citation)
  }

  public async deleteCitation(citation) {
    const userRef = this.afs.collection(`users/${this.userId}/citations`);
    userRef.doc(citation.id).delete()
    this.getData()
  }

  async getData() {
    const userRef = this.afs.collection(`users/${this.userId}/citations`);
    await userRef.get().toPromise().then(querySnapshot => {
      this.citations = querySnapshot.docs.map(doc => {
        const data = doc.data()
        const id = doc.id
        return { id, ...data }
      })
    })
    console.log(this.citations)
  } 

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

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/auth']);
  }
}

  // async addCitation(citation, date, type, note) {
  //   const userRef = this.afs.collection(`users/${this.userId}/citations`);
  //   userRef.add({
  //     'citation': citation,
  //     'date': date,
  //     'type': type,
  //     'note': note
  //   })
  //   this.getData()  
  // }

      // this.citations = this.afs.collection<Citation>(`users/${this.userId}/citations`)
    // .snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as Citation;
    //     data.id = a.payload.doc.id;
    //     return data
    //   })
    // })