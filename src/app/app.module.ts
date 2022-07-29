import { GameService } from './service/game.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { GameListComponent } from './games/game-list/game-list.component';
import { GameItemComponent } from './games/game-list/game-item/game-item.component';
import { NewGameComponent } from './new-game/new-game.component';
import { GamesComponent } from './games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuccessAlertComponent,
    GameItemComponent,
    GameListComponent,
    NewGameComponent,
    GamesComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
