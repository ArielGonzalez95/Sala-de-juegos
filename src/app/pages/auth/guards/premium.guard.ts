import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { environment } from '@env/environment';
import { createClient } from '@supabase/supabase-js';
import { readdir } from 'fs';


@Injectable({
  providedIn: 'root'
})
export class PremiumGuard implements CanActivate {
  puntos:any;
  suscripcion: boolean = false;
  constructor(private router:Router){}

  canActivate(){
    this.obtener();
    if(this.suscripcion != true){
      this.router.navigate(['/premium']);
      return false;
    }
    return true;
  }
  async obtener(): Promise<void> {
    
    const supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
    const user = supabase.auth.user()
    let { data: UsersGanadores, error } = await supabase
  .from('UsersGanadores')
  .select('*')
  
  const datos = UsersGanadores?.filter(i => i.user == user?.email);
  const data = datos?.filter(i => i.juego == 'Adivina el numero');
  this.puntos = data?.map(i => i.puntos);
  const puntaje = this.puntos[0];
  if(puntaje >= 10){
    this.suscripcion = true;
    console.log(this.suscripcion)
  }

}
}
