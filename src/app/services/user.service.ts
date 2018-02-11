import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { User } from '../entities/user';
import { Newuser } from '../entities/newuser';

@Injectable()
export class UserService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  private url = 'users';

  constructor(private http: Http) { }

  login_user(user: User) {

    const url = `${this.url}/login`;
    return this.http.post(url, JSON.stringify(user), {
      headers: this.headers,
      withCredentials: true
    })
      .map((res: Response) => res.json());
  }

  register_user(user: User) {

    const url = `${this.url}/register`;
    return this.http.post(url, JSON.stringify(user), { headers: this.headers })
      .map((res: Response) => res.json());
  }

  logout() {
    const url = `${this.url}/logout`;
    return this.http.put(url, null, {
      withCredentials: true
    })
      .map((res: Response) => res.json());
  }

  delete() {
    const url = `${this.url}`;
    return this.http.delete(url, {
      withCredentials: true
    })
      .map((res: Response) => res.json());
  }

  change_data(newuser: Newuser) {

    const url = `${this.url}/changeData`;
    return this.http.post(url, JSON.stringify(newuser), {
      headers: this.headers,
      withCredentials: true
    })
      .map((res: Response) => res.json());
  }
}
