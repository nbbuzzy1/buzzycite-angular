import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { User } from '../auth/user.model';
import { Citation } from '../citation/citation.model';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  user$: Observable<User>;
  userId: string;
  citations: Citation[];

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
  };

  async addCitation(citation: Citation) {
    const userRef = this.afs.collection(`users/${this.userId}/citations`);
    userRef.add(citation)
  };

  public async deleteCitation(citation: Citation) {
    const userRef = this.afs.collection(`users/${this.userId}/citations`);
    userRef.doc(citation.id).delete()
    this.getData()
  };

  async getData() {
    const userRef = this.afs.collection(`users/${this.userId}/citations`);
    await userRef.get().toPromise().then(querySnapshot => {
      this.citations = querySnapshot.docs.map(doc => {
        const data = doc.data()
        const id = doc.id
        return { id, ...data }
      })
    })
  };

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  };

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = { 
      uid: user.uid, 
      email: user.email, 
      displayName: user.displayName, 
      photoURL: user.photoURL
    } 
    this.router.navigate(['/'])
    return userRef.set(data, { merge: true })
  };

  async signOut() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/auth']);
  };
};