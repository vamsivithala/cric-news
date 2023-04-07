import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesComponent } from './matches.component';


@NgModule({
  declarations: [
    MatchesComponent
  ],
  imports: [
    CommonModule,
    MatchesRoutingModule,
    AgGridModule
  ]
})
export class MatchesModule { }
