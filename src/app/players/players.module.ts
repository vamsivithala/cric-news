import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';
import { AgGridModule } from 'ag-grid-angular';
import { PlayersscoresComponent } from './playersscores/playersscores.component';

@NgModule({
  declarations: [
    PlayersComponent,
    PlayersscoresComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    AgGridModule
  ]
})
export class PlayersModule { }
