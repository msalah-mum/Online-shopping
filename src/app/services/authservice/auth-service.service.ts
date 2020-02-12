import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user$: Observable<firebase.User>
  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.user$ = afAuth.authState;
  }

  googleLogin() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['home'])
  }
  fbLogin() {
    this.afAuth.auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
    this.router.navigate(['home'])
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
