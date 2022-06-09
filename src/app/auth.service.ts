import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public get afAuth(): AngularFireAuth {
    return this._afAuth;
  }
  public set afAuth(value: AngularFireAuth) {
    this._afAuth = value;
  }
  

  constructor(
    private _afAuth: AngularFireAuth
  ) { }
}
