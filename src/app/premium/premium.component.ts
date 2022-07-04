import { Component, OnInit } from '@angular/core';
import { environment } from '@env/environment';
import { createClient } from '@supabase/supabase-js';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.scss']
})
export class PremiumComponent implements OnInit {
  suscribir: boolean = false;
  userEmail: any;
  constructor() { }
  async ngOnInit(): Promise<void> {
    const supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
  const user = supabase.auth.user();
  let { data: UsersGanadores, error } = await supabase
.from('UsersGanadores')
.select('*')


const datos = UsersGanadores?.filter(i => i.user == user?.email);
this.userEmail = user?.email;
  console.log(this.userEmail)
  }

  
  async UpdatePremium(){
    
    console.log('entro')
    const supabase = createClient(environment.supabase.url, environment.supabase.publicKey);
      const { data, error } = await supabase
    .from('UsersGanadores')
    .update({ Premium:true })
    .eq('user',this.userEmail)
   
  }

  


}
