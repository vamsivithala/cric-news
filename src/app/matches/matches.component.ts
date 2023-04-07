import { Component, OnInit } from '@angular/core';
import { MatchesService } from './matches.service';
import { Observable, tap } from 'rxjs'
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  public matches$!: Observable<any>;

  rowData: any[] = [];
  columnDefs: ColDef[] = [
    {
      headerName: 'Matches', field: 'series_name',
    }
  ];
  defaultColDef = {
    filter: true,
    floatingFilter: true,
    sortable: true
  }
  constructor(private matchesService: MatchesService) {

  }

  ngOnInit(): void {
    this.matches$ = this.matchesService.getMatches().pipe(
      tap((res: any) => {
        console.log(res);
      })
    );
  }

  onGridReady(params: any) {
    params.api.sizeColumnsToFit();
  }
}
