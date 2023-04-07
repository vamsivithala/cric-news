import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TeamsService } from './teams.service';


@NgModule({
  declarations: [
    TeamsComponent
  ],
  providers: [TeamsService],
  exports: [TeamsComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    AgGridModule
  ]
})
export class TeamsModule { }
