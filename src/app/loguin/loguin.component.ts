import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-loguin',
  templateUrl: './loguin.component.html',
  styleUrls: ['./loguin.component.css']
})
export class LoguinComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) {}
  email: string = "";
  password:string="";
  inciado: boolean = false

  ngOnInit(): void {
  }
  

  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(this.email, this.password)
      .then((result) => {
        this.inciado = true
        console.log(this.inciado)
        alert("inicio sesion correctamente")
      })
      .catch((error) => {
        this.inciado = false
        console.log(this.inciado)
      });
  }

}
