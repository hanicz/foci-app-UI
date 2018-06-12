import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, Response } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable()
export class LeagueService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  private url = 'leagues';

  constructor(private http: Http) { }

  get_active_leagues(){
    const url = `${this.url}/active`;
    return this.http.get(url, {
      headers: this.headers,
      withCredentials: true
    }).pipe(map((res: Response) => res.json()));
  }

  get_all_leagues(){
    const url = `${this.url}`;
    return this.http.get(url, {
      headers: this.headers,
      withCredentials: true
    }).pipe(map((res: Response) => res.json()));
  }

  get_users_for_league(leagueId: Number){
    const url = `${this.url}/users/${leagueId}`;
    return this.http.get(url, {
      headers: this.headers,
      withCredentials: true
    }).pipe(map((res: Response) => res.json()));
  }

}
