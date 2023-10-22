import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GameListComponent } from './games/game-list/game-list.component';
import { GameService } from './service/game.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SuccessAlertComponent } from './shared/success-alert/success-alert.component';
import { GameItemComponent } from './games/game-list/game-item/game-item.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FilterPipe } from './filter.pipe';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SuccessAlertComponent,
    GameItemComponent,
    routingComponents,
    GameListComponent,
    FilterPipe,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
