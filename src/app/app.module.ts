import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MenuJuegosComponent } from './menu-juegos/menu-juegos.component';
import { LoguinComponent } from './loguin/loguin.component';
import { TatetiComponent } from './juegos/tateti/tateti.component';
import { AdivinaElNumeroComponent } from './juegos/adivina-el-numero/adivina-el-numero.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { FormsModule } from '@angular/forms';
import { MensajeComponent } from './juegos/adivina-el-numero/mensaje/mensaje.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { HomeComponent } from './home/home.component';


// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { firebaseConfig } from "./Db";
import { RegistrarComponent } from './loguin/registrar/registrar.component'



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MenuJuegosComponent,
    LoguinComponent,
    TatetiComponent,
    AdivinaElNumeroComponent,
    AhorcadoComponent,
    MensajeComponent,
    QuienSoyComponent,
    HomeComponent,
    RegistrarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
