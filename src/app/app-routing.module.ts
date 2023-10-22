import { GamesComponent } from './games/games.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewGameComponent } from './new-game/new-game.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: 'new-game', component: NewGameComponent },
  { path: '', component: GamesComponent },
  { path: 'auth', component: AuthComponent },
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
export const routingComponents = [NewGameComponent, GamesComponent];
