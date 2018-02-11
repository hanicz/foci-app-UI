import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TableService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  private url = 'tables';

  constructor(private http: Http) { }

  get_table(leagueid: Number){
    const url = `${this.url}/${leagueid}`;
    return this.http.get(url, {
      withCredentials: true
    })
      .map((res: Response) => res.json());
  }

}
