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
  password2:string="";
  passwordValidado:string="";
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) {}

  ngOnInit(): void {
  }

  validarPass(){
    if(this.password == this.password2){
      return this.passwordValidado = this.password;
    }else{
      return alert("las contraseñas no coinciden");
    }
    
  }
  // Sign up with email/password
  SignUp(email: string, password: string) {
    return this.afAuth
    
      .createUserWithEmailAndPassword(this.email, this.passwordValidado)
      .then((result) => {
        alert("se registro")
  
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  
}
