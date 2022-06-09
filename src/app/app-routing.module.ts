import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth/guards/auth.guard';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'quien-soy', component:QuienSoyComponent},
  { path: 'menu-juegos', loadChildren: () => import('./pages/menu-juegos/menu-juegos.component').then(m => m.MenuJuegosComponent),canActivate: [AuthGuard]},
  { path: 'adivina-el-numero', loadChildren: () => import('./pages/juegos/adivina-el-numero/adivina-el-numero.component').then(m => m.AdivinaElNumeroComponent),canActivate: [AuthGuard] },
  { path: 'ahoracado', loadChildren: () => import('./pages/juegos/ahorcado/ahorcado.component').then(m => m.AhorcadoComponent),canActivate: [AuthGuard] },
  { path: 'tateti', loadChildren: () => import('./pages/juegos/tateti/tateti.component').then(m => m.TatetiComponent),canActivate: [AuthGuard] },
  { path: 'piedra-papel-tijera', loadChildren: () => import('./pages/juegos/piedra-papel-tijera/piedra-papel-tijera.component').then(m => m.PiedraPapelTijeraComponent),canActivate: [AuthGuard] },
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
