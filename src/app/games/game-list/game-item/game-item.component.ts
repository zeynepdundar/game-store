import { GameService } from './../../../service/game.service';
import { Game } from './../../game.model';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css'],
})
export class GameItemComponent implements OnInit {
  @Input() game: Game;
  @Output() gameRemoved: EventEmitter<boolean> = new EventEmitter<boolean>(
    false
  );

  faTrashCan = faTrashCan;

  constructor(private gameService: GameService) {}

  ngOnInit(): void {}

  remove(id: number) {
    this.gameService.removeGame(id);
    this.gameRemoved.emit(true);
    // this.userList = this.userService.getUsers();
  }
}
