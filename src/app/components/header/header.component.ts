import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  routes = [
    {
      route: 'players',
      routeLabel: 'Players'
    },
    {
      route: 'matches',
      routeLabel: 'Matches'
    },
    {
      route: 'teams',
      routeLabel: 'Teams'
    }
  ]
}
