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
      route: 'teams',
      routeLabel: 'Teams'
    }
  ]
}
