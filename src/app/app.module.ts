import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { GameItemComponent } from './games/game-list/game-item/game-item.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './games/game-detail/game-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuccessAlertComponent,
    GameItemComponent,
    GameListComponent,
    NewGameComponent,
    GamesComponent,
    GameDetailComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
