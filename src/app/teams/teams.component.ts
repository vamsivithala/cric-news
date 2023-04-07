import { Component, OnInit } from '@angular/core';
import { TeamsService } from './teams.service';
import { Observable, tap } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { ColDef } from 'ag-grid-community';
import { GridOptions } from 'ag-grid-community';
import { GridReadyEvent } from 'ag-grid';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],

})
export class TeamsComponent implements OnInit {
  public teams$!: Observable<any>;
  rowData: any[] = [];
  columnDefs: ColDef[] = [
    {
      headerName: 'Country', field: 'teamName',
    },
    {
      headerName: 'Team Name', field: 'teamSName',
    },
  ];

  defaultColDef = {
    filter: true,
    floatingFilter: true,
    sortable: true
  }
  constructor(private teamService: TeamsService) {

  }
  ngOnInit(): void {
    this.teams$ = this.teamService.getTeams().pipe(
      tap(res => {
        console.log(res);
      })
    );
  }

  onGridReady(params: any) {
    params.api.sizeColumnsToFit();
  }
}
