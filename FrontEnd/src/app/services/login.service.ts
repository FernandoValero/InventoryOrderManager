
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000/api/user/";
  constructor(private _http: HttpClient) {  }
  public login(username: string, password: string): Observable<any> {
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify({ userName: username, password: password });
    console.log(body);
    return this._http.post(this.url + 'login', body, httpOption);
  }
  public logout() {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("userId");
  }

  public userLoggedIn() {
    var result = false;
    var user = sessionStorage.getItem("user");
    if (user != null) {
      result = true;
    }
    return result;
  }
  public userLogged() {
    var user = sessionStorage.getItem("user");
    return user;
  }
  public idLogged() {
    var id = sessionStorage.getItem("userId");
    return id;
    }
}
