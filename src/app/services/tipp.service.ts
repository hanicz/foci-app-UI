import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { Tipp } from '../entities/tipp';

@Injectable()
export class TippService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  private userUrl = 'tipps';

  constructor(private http: Http) { }

  regist_tipp(tipp: Tipp){

    var data = {
      'matchid': tipp.id,
      'tipp': tipp.score
    }

    const url = `${this.userUrl}`;
    return this.http.post(url, JSON.stringify(data),{
      headers: this.headers,
      withCredentials: true
    })
      .map((res: Response) => res.json());
  }

}
