import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth/guards/auth.guard';
import { PremiumGuard } from '@auth/guards/premium.guard';
import { prependListener } from 'process';
import { AdivinaElNumeroComponent } from './pages/juegos/adivina-el-numero/adivina-el-numero.component';
import { AhoracadoModule } from './pages/juegos/ahorcado/ahoracado.module';
import { AhorcadoComponent } from './pages/juegos/ahorcado/ahorcado.component';
import { PiedraPapelTijeraComponent } from './pages/juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { PiedraPapelTijeraModule } from './pages/juegos/piedra-papel-tijera/piedra-papel-tijera.module';
import { TatetiComponent } from './pages/juegos/tateti/tateti.component';
import { TatetiModule } from './pages/juegos/tateti/tateti.module';
import { MenuJuegosComponent } from './pages/menu-juegos/menu-juegos.component';
import { MenuJuegosModule } from './pages/menu-juegos/menu-juegos.module';
import { QuienSoyModule } from './pages/quien-soy/quien-soy.module';
import { PremiumComponent } from './premium/premium.component';
import { TablaDeNumerosComponent } from './tabla-de-numeros/tabla-de-numeros.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'quien-soy', loadChildren: () => import('./pages/quien-soy/quien-soy.module').then((m:{QuienSoyModule: QuienSoyModule})=>m.QuienSoyModule)},
  { path: 'menu-juegos', loadChildren: () => import('./pages/menu-juegos/menu-juegos.module').then((m:{MenuJuegosModule: MenuJuegosModule})=>m.MenuJuegosModule),canActivate: [AuthGuard]},
  { path: 'adivina-el-numero', component: AdivinaElNumeroComponent,canActivate: [AuthGuard]},
  { path: 'ahorcado',loadChildren: () => import('./pages/juegos/ahorcado/ahoracado.module').then((m:{AhoracadoModule: AhoracadoModule})=>m.AhoracadoModule),canActivate: [PremiumGuard]},
  { path: 'tateti',loadChildren: () => import('./pages/juegos/tateti/tateti.module').then((m:{TatetiModule: TatetiModule})=>m.TatetiModule),canActivate: [PremiumGuard]},
  { path: 'piedra-papel-tijera',loadChildren: () => import('./pages/juegos/piedra-papel-tijera/piedra-papel-tijera.module').then((m:{PiedraPapelTijeraModule: PiedraPapelTijeraModule})=>m.PiedraPapelTijeraModule),canActivate: [PremiumGuard]},
  {path: 'tabla-de-numeros',component:TablaDeNumerosComponent,canActivate:[AuthGuard]},
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/auth/sign-in/sign-in.module').then(m => m.SignInModule),
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpModule),
    
  },
  {path: 'premium', component: PremiumComponent,canActivate:[AuthGuard]},
  
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
