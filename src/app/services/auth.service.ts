import { Injectable } from '@angular/core';
import {Router} from '@angular/router'

import {auth, User} from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore';

import {Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import {IUser} from '../model/user.model'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  $user:Observable<IUser>
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) { 
    this.$user=this.afAuth.authState.pipe(
      switchMap(user=>{
        if(user){
          // localStorage.setItem('user',JSON.stringify(user));
          return this.afs.doc<IUser>(`user/${user.uid}`).valueChanges()
        }
        else{
          // localStorage.setItem('user', null);
          return of(null)
        }
      })
    )
  }

  async googleSignin(){
    const provider= new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async usernamePasswordSignin(email,password){
    const provider = await this.afAuth.signInWithEmailAndPassword(email,password)
  }

  async signOut(){
    await this.afAuth.signOut();
    return this.router.navigate(['/'])
  }

  updateUserData({uid,displayName,email,photoURL}:User){
    const userRef: AngularFirestoreDocument<IUser> = this.afs.doc(`user/${uid}`)

    const data ={
      display_name:displayName,
      email: email,
      photoURL: photoURL
    }
    return userRef.set(data,{merge: true});
  }
}
