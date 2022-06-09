import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  email:string= "";
  password:string="";
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) {}

  ngOnInit(): void {
  }
  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        alert("se registro")
  
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  
}
