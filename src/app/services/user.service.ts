import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams, Response } from '@angular/http';
import { map } from "rxjs/operators";
import { User } from '../entities/user';
import { ChangeUser } from '../entities/changeuser';

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
    }).pipe(map((res: Response) => res.json()));
  }

  register_user(user: User) {

    const url = `${this.url}/register`;
    return this.http.post(url, JSON.stringify(user), { headers: this.headers }).pipe(map((res: Response) => res.json()));
  }

  logout() {
    const url = `${this.url}/logout`;
    return this.http.put(url, null, {
      withCredentials: true
    }).pipe(map((res: Response) => res.json()));
  }

  delete() {
    const url = `${this.url}`;
    return this.http.delete(url, {
      withCredentials: true
    }).pipe(map((res: Response) => res.json()));
  }

  change_data(changeUser: ChangeUser) {

    const url = `${this.url}/changeData`;
    return this.http.post(url, JSON.stringify(changeUser), {
      headers: this.headers,
      withCredentials: true
    }).pipe(map((res: Response) => res.json()));
  }

  getPublicUser(){
    const url = `${this.url}`;
    return this.http.get(url, {
      headers: this.headers,
      withCredentials: true
    }).pipe(map((res: Response) => res.json()));
  }

  reset(email: string){
    var data = {
      'email': email
    }

    const url = `${this.url}/reset`;
    return this.http.post(url, JSON.stringify(data), {
      headers: this.headers,
      withCredentials: true
    }).pipe(map((res: Response) => res.json()));
  }

  resetWithToken(password: string, token: string){
    var data = {
      'token': token,
      'password': password
    }

    const url = `${this.url}/resetPassword`;
    return this.http.post(url, JSON.stringify(data), {
      headers: this.headers,
      withCredentials: true
    }).pipe(map((res: Response) => res.json()));
  }
}
