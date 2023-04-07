import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  private apiUrl = 'https://cricket-live-data.p.rapidapi.com/series'
  private httpOptions = {
    headers: new HttpHeaders({
      method: 'GET',
      'X-RapidAPI-Key': 'a2a4ecea78mshb6975d334be1826p185679jsn40e47b02d1bf',
      'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'

    })
  };
  constructor(private http: HttpClient) { }

  getMatches(): Observable<any> {
    return this.http.get<any>(this.apiUrl, this.httpOptions)
  }
}
