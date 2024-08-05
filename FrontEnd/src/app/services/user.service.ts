import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://localhost:3000/api/user"

  constructor(private _http: HttpClient) { }

  //Register a User
  public create(user: User): Observable<any> {
    let urlCreate = `${this.url}/${user.role}`;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    let body: any = JSON.stringify(user);
    return this._http.post(urlCreate, body, httpOptions);
  }

  //Delete a User
  public delete(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.delete(this.url + '/' + id, httpOptions);
  }

  //Update a User
  public update(user: User): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body: any = JSON.stringify(user);
    return this._http.put(this.url + '/' + user._id, body, httpOptions)
  }

  //Get all Users
  public getAll(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get(this.url, httpOptions);
  }

  //Get a User by ID
  public getById(id: string): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    }
    return this._http.get(this.url + '/' + id, httpOptions);
  }
}
