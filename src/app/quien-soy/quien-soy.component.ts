import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css'], 
})
export class QuienSoyComponent implements OnInit {
 @Input() viewQuienSoy :boolean= false ;
  @Input() aJugar:boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  }
  
}
