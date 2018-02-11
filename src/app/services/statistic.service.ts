import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, Response } from '@angular/http';

@Injectable()
export class StatisticService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  private url = 'statistics';

  constructor(private http: Http) { }

  get_statistic(leagueId: Number, route: String){
    const url = `${this.url}/${route}/${leagueId}`;
    return this.http.get(url, {
      headers: this.headers,
      withCredentials: true
    })
      .map((res: Response) => res.json());
  }

}
