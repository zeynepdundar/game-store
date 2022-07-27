import { Game } from './games/game.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'game-store';
  games: Game[] = [];

  onGameAdded(newGame: { gameName: string; bundler: string; owner: string }) {
    this.games.push(
      new Game(newGame.gameName, newGame.bundler, newGame.owner, 'gr')
    );
    console.log('GAMES', this.games);
  }
}
