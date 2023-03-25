import { Component, OnDestroy, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  dummyArray: any = [1, 2, 3];
  public players$!: Observable<any>;
  defaultColDef = {
    sortable: true
  };
  columnDefs: ColDef[] = [
    {
      field: 'name',
      headerName: 'Player Name',
      filter: 'agTextColumnFilter',
      floatingFilter: true
    },
    {
      field: 'playingRoles',
      headerName: 'Roles'
    }
  ];

  constructor(
    private playersService: PlayersService
  ) {

  }
  ngOnInit(): void {
    this.__loadData();
  }

  private __loadData() {
    this.players$ = this.playersService.getContractedPlayersList();
  }


}
