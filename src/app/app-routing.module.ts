import { NumberFormatStyle } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdivinaElNumeroComponent } from './juegos/adivina-el-numero/adivina-el-numero.component';
import { MensajeComponent } from './juegos/adivina-el-numero/mensaje/mensaje.component';
import { AhorcadoComponent } from './juegos/ahorcado/ahorcado.component';
import { TatetiComponent } from './juegos/tateti/tateti.component';
import { LoguinComponent } from './loguin/loguin.component';
import { MenuJuegosComponent } from './menu-juegos/menu-juegos.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';


const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path: 'loguin', component:LoguinComponent},
  {path: 'home', component: HomeComponent},
  {path:'menu-juegos',component: MenuJuegosComponent},
  {path:'quien-soy',component:QuienSoyComponent},
  {path:'adivina-el-numero',component:AdivinaElNumeroComponent},
  {path:'ahorcado',component:AhorcadoComponent},
  {path:'tateti',component:TatetiComponent}
  // {path:'adivina-el-numero',component:AdivinaElNumeroComponent},

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
