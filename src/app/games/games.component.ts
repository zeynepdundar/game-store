import { Game } from './game.model';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements OnInit {
  searchedGame: string = '';

  constructor() {}

  ngOnInit(): void {}
}
