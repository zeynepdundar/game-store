import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css'],
})
export class GameItemComponent implements OnInit {
  gameName = 'test game';
  bundle = 'testbundle.com';
  owner = 'erdem@gmail.com';
  constructor() {}

  ngOnInit(): void {}
}
