import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GameComponent } from './game/game.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, GameComponent, SuccessAlertComponent, GameListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
