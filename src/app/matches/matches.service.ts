import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor(
    private httpService: HttpService
  ) { }

  getMatches() {
    const url = 'https://cricket-live-data.p.rapidapi.com/series';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a2a4ecea78mshb6975d334be1826p185679jsn40e47b02d1bf',
        'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
      }
    };
    return this.httpService.httpGet(url, { headers: options.headers });
    fetch('https://cricket-live-data.p.rapidapi.com/series', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }
}
