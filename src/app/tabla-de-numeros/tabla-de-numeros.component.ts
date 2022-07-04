import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { createClient } from '@supabase/supabase-js';

@Component({
  selector: 'app-tabla-de-numeros',
  templateUrl: './tabla-de-numeros.component.html',
  styleUrls: ['./tabla-de-numeros.component.scss']
})
export class TablaDeNumerosComponent implements OnInit {
  
  adivinaElNumero:any;
  taTeTi:any;
  ahorcado:any;
  ppt:any;
  ngOnInit(): void {
    this.obtener();

  }

  async obtener(){
    const supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
    const user = supabase.auth.user()
    let { data: UsersGanadores, error } = await supabase
  .from('UsersGanadores')
  .select('*')
  
  this.adivinaElNumero = UsersGanadores?.filter(i => i.juego == 'Adivina el numero');
  this.taTeTi = UsersGanadores?.filter(i => i.juego == 'Ta Te Ti');
  this.ahorcado = UsersGanadores?.filter(i => i.juego == 'Ahorcado');
  this.ppt = UsersGanadores?.filter(i => i.juego == 'Piedra Papel Tijera');
  console.log(UsersGanadores)
  
  }
  
}
