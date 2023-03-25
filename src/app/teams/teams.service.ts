import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(
    private httpService: HttpService
  ) { }
  getTeams() {
    const url = 'https://cricbuzz-cricket.p.rapidapi.com/teams/v1/international';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a2a4ecea78mshb6975d334be1826p185679jsn40e47b02d1bf',
        'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
      }
    };
    return this.httpService.httpGet(url, { headers: options.headers });
    fetch('https://cricbuzz-cricket.p.rapidapi.com/teams/v1/international', options)
      .then(response => response.json())
      .then(response => response)
      .catch(err => console.error(err));
  }
}
