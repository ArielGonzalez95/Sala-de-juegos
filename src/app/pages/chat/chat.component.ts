import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { createClient } from '@supabase/supabase-js';
import { RealtimeClient } from '@supabase/realtime-js'
import { from, observable, Subject, subscribeOn } from 'rxjs';
import { on } from 'events';
import { chat } from 'src/app/clases/chatClass';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  titleInput: string ="";
  Contenido: string ="";
  listCards: any = {};
  lists: any[] = [];
  list_id:any;
  public coleccion: Array<chat> = new Array<chat>();

  supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
  
  constructor() { }

  async ngOnInit(): Promise<void> {

    const Subscription = this.supabase
  .from('countries')
  .on('*', (payload) => {
  })
  .subscribe( )

    console.log(this.coleccion)


const mySubscription = this.supabase
  .from('Chat')
  .on('INSERT', (payload) => {
    
  })
  .subscribe()

  }
  
  async obtener(){
    const supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
    const user = supabase.auth.user()
    let { data: UsersGanadores, error } = await supabase
  .from('UsersGanadores')
  .select('*')
 
  }

  async enviarPost(): Promise<void>{
    const supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
    const user = supabase.auth.user();
    const title = this.titleInput;
    const Contenido = this.Contenido;
    const { data, error } = await supabase
    .from('Chat')
    .insert([
      {
        Titulo: title, user: user?.email,content:Contenido
      },
    ])
  }
}
