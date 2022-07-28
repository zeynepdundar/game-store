import { Game } from './game.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  gameSearched = '';
  @Input() games: Game[];

  constructor() {}

  ngOnInit(): void {}
}
