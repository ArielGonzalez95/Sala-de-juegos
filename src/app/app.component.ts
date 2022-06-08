import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sala-de-juegos';
  isValid = true;
  @Input() aJugar:boolean= false;
}
