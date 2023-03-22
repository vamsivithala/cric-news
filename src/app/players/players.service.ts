import { Injectable } from '@angular/core';
import { APP_URLS } from '../app.urls';
import { HttpService } from '../shared/http.service';
import { of } from 'rxjs'
import { playersResponse } from './players.mock-data';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(
    private httpService: HttpService
  ) { }

  public getContractedPlayersList() {
    // return this.httpService.httpGet(APP_URLS.contractedPlayersList)
    return of(playersResponse); // returns stored data as Observable
  }
}
