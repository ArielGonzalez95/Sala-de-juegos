import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarModule } from '@shared/navbar/navbar.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MensajeComponent } from './pages/juegos/adivina-el-numero/mensaje/mensaje.component';
import { AdivinaElNumeroComponent } from './pages/juegos/adivina-el-numero/adivina-el-numero.component';
import { MenuJuegosComponent } from './pages/menu-juegos/menu-juegos.component';
import { AhorcadoComponent } from './pages/juegos/ahorcado/ahorcado.component';
import { TatetiComponent } from './pages/juegos/tateti/tateti.component';
import { PiedraPapelTijeraComponent } from './pages/juegos/piedra-papel-tijera/piedra-papel-tijera.component';



@NgModule({
  declarations: [
    AppComponent,
    MensajeComponent,
    AdivinaElNumeroComponent,
    MenuJuegosComponent,
    AhorcadoComponent,
    TatetiComponent,
    PiedraPapelTijeraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
