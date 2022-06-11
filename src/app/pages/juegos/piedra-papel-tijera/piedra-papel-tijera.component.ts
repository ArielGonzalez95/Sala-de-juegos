import { Component, OnInit } from '@angular/core';
import { USER_STORAGE_KEY } from '@shared/constants/constant';
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
  constructor(private playGame: GameService) {}

  ngOnInit(): void {
    this.result = 'Esperando jugada...';
  }

  play(choice: string): void {
    const result = this.playGame.game(choice);
    this.mensaje= result.message;
    this.result = result.message;
    this.pointsUser += result.userAdd;
    this.pointsComp += result.compAdd;
  }
}