import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'players',
  loadChildren: () => import('./players/players.module').then(m => m.PlayersModule),

}, {
  path: 'teams',
  loadChildren: () => import('./teams/teams.module').then(m => m.TeamsModule)
},
{
  path: 'matches',
  loadChildren: () => import('./matches/matches.module').then(m => m.MatchesModule)
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
