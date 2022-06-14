import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiedraPapelTijeraComponent } from './piedra-papel-tijera.component';
import { PiedraPapelTijeraRoutingModule } from './piedra-papel-tijera-routing.module';



@NgModule({
  declarations: [
    PiedraPapelTijeraComponent
  ],
  imports: [
    CommonModule,
    PiedraPapelTijeraRoutingModule
  ]
})
export class PiedraPapelTijeraModule { }
