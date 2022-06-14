import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AhorcadoComponent } from './ahorcado.component';
import { AhorcadoRoutingModule } from './ahoracado-routing.module';



@NgModule({
  declarations: [
    AhorcadoComponent
  ],
  imports: [
    CommonModule,
    AhorcadoRoutingModule

  ]
})
export class AhoracadoModule { }
