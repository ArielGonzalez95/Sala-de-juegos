import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';
import { USER_STORAGE_KEY } from '@shared/constants/constant';
import { createClient } from '@supabase/supabase-js';
import { GameService } from './game.service';


@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {
  result: string | undefined;
  pointsUser = 0;
  pointsComp =  0;
  userActive =localStorage.getItem(USER_STORAGE_KEY);
  mensaje = "";
  puntos: number| any;
  id: number | any;
  emailUsuario: string | any;
  userExist = false;
  juego: string|any;
  constructor(private playGame: GameService,private readonly router: Router) {}

  ngOnInit(): void {
    this.result = 'Esperando jugada...';
    
  }

  async play(choice: string): Promise<void> {
    const result = this.playGame.game(choice);
    this.mensaje= result.message;
    this.result = result.message;
    this.pointsUser += result.userAdd;
    this.pointsComp += result.compAdd;
    if(result.userAdd == 1)
    {
      const supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
      const user = supabase.auth.user()
      let { data: UsersGanadores, error } = await supabase
    .from('UsersGanadores')
    .select('*')
    
    const datos = UsersGanadores?.filter(i => i.user == user?.email);
    const data = datos?.filter(i => i.juego == 'Piedra Papel Tijera');
        this.puntos = data?.map(i => i.puntos);
        this.id = data?.map(i => i.id);
        this.emailUsuario = data?.map(i =>i.user);

        if(this.puntos.length == 0){
          this.insertarNew();
         }else{
          
          this.UpdatePuntaje();
         }
    }
  }

  async UpdatePuntaje(){
  
    const supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
    const id = this.id;
    const puntos = parseInt(this.puntos);
    const puntosSumado = puntos + 1;
    console.log('entro a update');
    
      const { data, error } = await supabase
    .from('UsersGanadores')
    .update({ puntos:puntosSumado })
    .eq('id',id)
    
   
  }

  async insertarNew(){
    console.log('entro a create');
    const supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
    const user = supabase.auth.user();
    const juego = "Piedra Papel Tijera";
    const { data, error } = await supabase
    .from('UsersGanadores')
    .insert([
      { user: user?.email, puntos:'1', juego: juego },
    ])
  }


}