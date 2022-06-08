import { NumberFormatStyle } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from './juegos/adivina-el-numero/adivina-el-numero.component';
import { MensajeComponent } from './juegos/adivina-el-numero/mensaje/mensaje.component';


const routes: Routes = [
  {path:'advina-ea-el-numero', component:AdivinaElNumeroComponent},
  {path:"modal",component: MensajeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
