import { Component, OnInit } from '@angular/core';
import { TeamsService } from './teams.service';
import { Observable } from 'rxjs'


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  public teams$!: Observable<any>;
  constructor(
    private teamService: TeamsService
  ) {

  }
  ngOnInit(): void {
    this.teams$ = this.teamService.getTeams();
  }
}
