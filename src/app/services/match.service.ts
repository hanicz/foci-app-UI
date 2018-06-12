import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, Response } from '@angular/http';
import { map } from "rxjs/operators";

@Injectable()
export class MatchService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  private url = 'matches';

  constructor(private http: Http) { }

  get_timed_matches(leagueId: Number){
    const url = `${this.url}/timed/${leagueId}`;
    return this.http.get(url, {
      headers: this.headers,
      withCredentials: true
    }).pipe(map((res: Response) => res.json()));
  }

  get_histroy_tipps(leagueId: Number){
    const url = `${this.url}/history/${leagueId}`;
    return this.http.get(url, {
      headers: this.headers,
      withCredentials: true
    }).pipe(map((res: Response) => res.json()));
  }

}
