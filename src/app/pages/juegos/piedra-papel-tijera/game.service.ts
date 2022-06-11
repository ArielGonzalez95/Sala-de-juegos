import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  constructor() {}
  private getComputerChoice(): string {
    const choices = ['r', 'p', 's']; 
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  }

  game(
    userChoice: string
  ): {
    message: string;
    userAdd: number;
    compAdd: number;
  } 
  
  {
    const playUserComp = userChoice + this.getComputerChoice();
    console.log(`Jugada realizada: ${playUserComp}`);
    let playStatus!: {
      message: string;
      userAdd: number;
      compAdd: number;
    };


    switch (playUserComp) {
      // Ganamos
      case 'rs':
      case 'sp':
      case 'pr':
        playStatus = {
          message: 'Ganaste :(',
          userAdd: 1,
          compAdd: 0,
        };
        break;
      // Gana la computadora
      case 'rp':
      case 'ps':
      case 'sr':
        playStatus = {
          message: 'Te gane :)',
          userAdd: 0,
          compAdd: 1,
        };
        break;
      // Empatamos
      case 'rr':
      case 'pp':
      case 'ss':
        playStatus = {
          message: 'Empatamos, pero la proxima te la gano!',
          userAdd: 0,
          compAdd: 0,
        };
        break;
        
    }

    return playStatus;
  }
  
}