import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { User } from '../entities/user';

@Injectable()
export class UserService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  private userUrl = 'users';

  constructor(private http: Http) { }

  login_user(user: User) {

    const url = `${this.userUrl}/login`;
    return this.http.post(url, JSON.stringify(user), {
      headers: this.headers,
      withCredentials: true
    })
      .map((res: Response) => res.json());
  }

  register_user(user: User) {

    const url = `${this.userUrl}/register`;
    return this.http.post(url, JSON.stringify(user), { headers: this.headers })
      .map((res: Response) => res.json());
  }

  logout() {
    const url = `${this.userUrl}/logout`;
    return this.http.put(url, null, {
      withCredentials: true
    })
      .map((res: Response) => res.json());
  }

  delete() {
    const url = `${this.userUrl}`;
    return this.http.delete(url, {
      withCredentials: true
    })
      .map((res: Response) => res.json());
  }
}
