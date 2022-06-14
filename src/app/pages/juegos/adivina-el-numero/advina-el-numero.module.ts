import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdivinaElNumeroComponent } from './adivina-el-numero.component';
import { AdivinaElNumeroRoutingModule } from './advina-el-numero-routing.module';



@NgModule({
  declarations: [
    AdivinaElNumeroComponent
  ],
  imports: [
    CommonModule,
    AdivinaElNumeroRoutingModule
  ]
})
export class AdvinaElNumeroModule { }
