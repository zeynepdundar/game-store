import { Component, EventEmitter, Output } from '@angular/core';
import { Game } from './../games/game.model';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.css'],
})
export class NewGameComponent {
  @Output() gameAdded = new EventEmitter<{}>();
  gameCreated = false;

  onCreateGame(gameName, bundler, owner) {
    this.gameAdded.emit({ gameName: gameName, bundler: bundler, owner: owner });
    this.gameCreated = true;
    console.log('New game created!');
  }
}
