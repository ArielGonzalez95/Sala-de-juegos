import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TatetiComponent } from './tateti.component';
import { TatetiRoutingModule } from './tateti-routing.module';



@NgModule({
  declarations: [
    TatetiComponent
  ],
  imports: [
    CommonModule,
    TatetiRoutingModule
  ]
})
export class TatetiModule { }
