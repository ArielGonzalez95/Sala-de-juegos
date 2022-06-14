import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuJuegosComponent } from './menu-juegos.component';
import { MenuJuegosRoutingModule } from './menu-juegos-routing.module';



@NgModule({
  declarations: [
    MenuJuegosComponent
  ],
  imports: [
    CommonModule,
    MenuJuegosRoutingModule
  ]
})
export class MenuJuegosModule { }
