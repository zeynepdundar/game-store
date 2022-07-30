import { GameService } from './../../service/game.service';
import { Game } from './../game.model';

import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  allowNewGame = false;
  games: Game[] = [];
  @Input() searchedGame: string;
  a;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {
    this.games = this.gameService.getGames();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.searchedGame || this.searchedGame !== '') {
      this.games = this.games.filter((e) => {
        return (
          e.gameName.toLowerCase() === this.searchedGame.toLowerCase() ||
          e.gameName.toLowerCase().indexOf(this.searchedGame.toLowerCase()) >= 0
        );
      });
    } else {
      this.games = this.gameService.getGames();
    }
  }

  onDeleteClick(): void {
    this.games = this.gameService.getGames();
  }
}
