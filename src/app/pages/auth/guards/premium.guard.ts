import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { environment } from '@env/environment';
import { createClient } from '@supabase/supabase-js';
import { readdir } from 'fs';



@Injectable({
  providedIn: 'root'
})
export class PremiumGuard implements CanActivate {
  suscripcion:any;
  
  constructor(private router:Router){}


  canActivate(){
    
      this.obtenerPuntaje();
    if(!this.suscripcion){
      this.router.navigate(['/premium']);
      return false;
    }
    return true;
  }
  
  async obtenerPuntaje(){
    const supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
    const user = supabase.auth.user()
    let { data: UsersGanadores, error } = await supabase
  .from('UsersGanadores')
  .select('*')
  
  const datos = UsersGanadores?.filter(i => i.user == user?.email);
  const data = datos?.map(i=> i.Premium)[0];
  
  this.suscripcion= data;
  console.log(this.suscripcion)
      
      
  }


}
