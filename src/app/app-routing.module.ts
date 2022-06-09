import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth/guards/auth.guard';
import { AdivinaElNumeroComponent } from './pages/juegos/adivina-el-numero/adivina-el-numero.component';
import { AhorcadoComponent } from './pages/juegos/ahorcado/ahorcado.component';
import { PiedraPapelTijeraComponent } from './pages/juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './pages/juegos/tateti/tateti.component';
import { MenuJuegosComponent } from './pages/menu-juegos/menu-juegos.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { QuienSoyModule } from './pages/quien-soy/quien-soy.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'quien-soy', loadChildren: () => import('./pages/quien-soy/quien-soy.module').then((m:{QuienSoyModule: QuienSoyModule})=>m.QuienSoyModule)},
  { path: 'menu-juegos',component:MenuJuegosComponent},
  { path: 'adivina-el-numero', component:AdivinaElNumeroComponent },
  { path: 'ahorcado',component:AhorcadoComponent },
  { path: 'tateti',component:TatetiComponent },
  { path: 'piedra-papel-tijera',component:PiedraPapelTijeraComponent},
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/auth/sign-in/sign-in.module').then(m => m.SignInModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpModule),
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
