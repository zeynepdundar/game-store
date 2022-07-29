import { GameService } from './../../../service/game.service';
import { Game } from './../../game.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css'],
})
export class GameItemComponent implements OnInit {
  @Input() game: Game;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {}

  remove(id: number) {
    this.gameService.removeGame(id);
  }
}
