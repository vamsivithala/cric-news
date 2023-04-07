import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private apiUrl = 'https://unofficial-cricbuzz.p.rapidapi.com/teams/list'

  private httpOptions = {
    headers: new HttpHeaders({
      method: 'GET',
      'X-RapidAPI-Key': 'a2a4ecea78mshb6975d334be1826p185679jsn40e47b02d1bf',
      'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com'
    })
  };

  constructor(private http: HttpClient) { }

  getTeams(): Observable<any> {
    return this.http.get<any>(this.apiUrl, this.httpOptions).pipe(
      map(response => {
        return response.teamData.filter((obj: any) => obj.teamId)
      })
    );
  }
}


