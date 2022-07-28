import { Game } from './../game.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css'],
})
export class GameListComponent implements OnInit {
  allowNewGame = false;

  // games: Game[] = [new Game('Game x', 'bundle y', 'owner z', 'image')];

  @Input() games: Game[];

  constructor() {}

  ngOnInit(): void {
    console.log('games', this.games);
  }
}
