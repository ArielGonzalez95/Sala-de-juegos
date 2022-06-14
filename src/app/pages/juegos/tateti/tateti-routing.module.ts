import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TatetiComponent } from './tateti.component';


const routes: Routes = [
  { path: '', component: TatetiComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TatetiRoutingModule{ }
