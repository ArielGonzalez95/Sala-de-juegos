import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarModule } from '@shared/navbar/navbar.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdivinaElNumeroComponent } from './pages/juegos/adivina-el-numero/adivina-el-numero.component';
import { TablaDeNumerosComponent } from './tabla-de-numeros/tabla-de-numeros.component';
import { PremiumComponent } from './premium/premium.component';





@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    TablaDeNumerosComponent,
    PremiumComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
