import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, Response } from '@angular/http';
import { map } from "rxjs/operators";
import { Tipp } from '../entities/tipp';

@Injectable()
export class TippService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  private url = 'tipps';

  constructor(private http: Http) { }

  regist_tipp(tipp: Tipp){

    var data = {
      'matchid': tipp.id,
      'tipp': tipp.score
    }

    const url = `${this.url}`;
    return this.http.post(url, JSON.stringify(data),{
      headers: this.headers,
      withCredentials: true
    }).pipe(map((res: Response) => res.json()));
  }

}
