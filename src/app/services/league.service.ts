import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, Response } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class LeagueService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  private userUrl = 'leagues';

  constructor(private http: Http) { }

  get_active_leagues(){
    const url = `${this.userUrl}/active`;
    return this.http.get(url, {
      headers: this.headers,
      withCredentials: true
    })
      .map((res: Response) => res.json());
  }

  get_all_leagues(){
    const url = `${this.userUrl}`;
    return this.http.get(url, {
      headers: this.headers,
      withCredentials: true
    })
      .map((res: Response) => res.json());
  }

}
