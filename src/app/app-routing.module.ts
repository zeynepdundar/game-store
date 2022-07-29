import { GamesComponent } from './games/games.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewGameComponent } from './new-game/new-game.component';

const routes: Routes = [
  { path: 'new-game', component: NewGameComponent },
  { path: 'games', component: GamesComponent },
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
export const routingComponents = [NewGameComponent, GamesComponent];
