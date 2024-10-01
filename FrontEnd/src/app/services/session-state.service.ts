import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';
import { UserService } from './user.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class SessionStateService {

  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this.userSubject.asObservable();

  constructor(private userService: UserService, private loginService: LoginService) {
    this.loadUser();
  }

  public loadUser(): void {
    if (this.loginService.userLoggedIn()) {
      this.userService.getById(this.loginService.idLogged()!).subscribe(
        user => this.userSubject.next(user),
        error => console.error(error)
      );
    }
  }

  public logout(): void {
    this.loginService.logout();
    this.userSubject.next(null);
  }

}
