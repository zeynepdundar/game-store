import { Game } from './../games/game.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private gameList: Game[] = [];

  getGames() {
    return this.gameList;
  }

  addGame(newGame: Game) {
    this.gameList.push(newGame);
  }

  removeGame(id: number) {
    this.gameList = this.gameList.filter((x) => x.id != id);
  }

  constructor() {}
}
