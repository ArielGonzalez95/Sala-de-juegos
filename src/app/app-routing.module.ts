import { NumberFormatStyle } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdivinaElNumeroComponent } from './juegos/adivina-el-numero/adivina-el-numero.component';
import { MensajeComponent } from './juegos/adivina-el-numero/mensaje/mensaje.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { PiedraPapelTijeraComponent } from './juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './juegos/tateti/tateti.component';
import { LoguinComponent } from './loguin/loguin.component';
import { RegistrarComponent } from './loguin/registrar/registrar.component';
import { MenuJuegosComponent } from './menu-juegos/menu-juegos.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  
  {path:'registrar',component:RegistrarComponent},
  {path: 'loguin', component:LoguinComponent},
  {path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
  {path:'menu-juegos',component: MenuJuegosComponent,canActivate:[AuthGuard]},
  {path:'quien-soy',component:QuienSoyComponent},
  {path:'adivina-el-numero',component:AdivinaElNumeroComponent,canActivate:[AuthGuard]},
  {path:'ahorcado',component:AhorcadoComponent,canActivate:[AuthGuard]},
  {path:'tateti',component:TatetiComponent,canActivate:[AuthGuard]},
  {path:'piedra-papel-tijera',component:PiedraPapelTijeraComponent,canActivate:[AuthGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
