import { Component, OnInit } from '@angular/core';
import { MatchesService } from './matches.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  public matches$!: Observable<any>;
  constructor(
    private matchesService: MatchesService
  ) {

  }

  ngOnInit(): void {
    this.matches$ = this.matchesService.getMatches();
  }
}
