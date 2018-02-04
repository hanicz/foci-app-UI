import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class MatchService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  private userUrl = 'matches';

  constructor(private http: Http) { }

  get_timed_matches(leagueId: Number){
    const url = `${this.userUrl}/timed/${leagueId}`;
    return this.http.get(url, {
      headers: this.headers,
      withCredentials: true
    })
      .map((res: Response) => res.json());
  }

}
