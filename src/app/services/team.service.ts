import { Injectable } from '@angular/core';

import { Headers, Http, URLSearchParams, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class TeamService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  private url = 'teams';

  constructor(private http: Http) { }

  get_selected() {
    const url = `${this.url}/selected`;
    return this.http.get(url, {
      headers: this.headers,
      withCredentials: true
    })
      .map((res: Response) => res.json());
  }

  select_new(leagueid: Number, team: String) {

    var data = {
      "leagueid": leagueid,
      "team": team
    };

    const url = `${this.url}/new`;
    return this.http.post(url, data,{
      headers: this.headers,
      withCredentials: true
    })
      .map((res: Response) => res.json());
  }

  get_teams(leagueid: Number) {
    const url = `${this.url}/all/${leagueid}`;
    return this.http.get(url, {
      headers: this.headers,
      withCredentials: true
    })
      .map((res: Response) => res.json());
  }

}
