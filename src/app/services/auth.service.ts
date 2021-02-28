import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { IUser } from '../profile/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: IUser;
  public isAuthenticated: boolean;
  constructor(private router: Router) {}

  loginUser(userName: string, password: string) {
    console.log("HI")
    this.user = {
      id: 1,
      userName: userName,
      firstName: "Alex",
      lastName: 'Dimitrov',
    }

    this.router.navigate(['/']);
  }

  updateUser(firstName: string, lastName: string) {
    console.log("HI")
    this.user = {
      id: 1,
      userName: 'testUserName',
      firstName: firstName,
      lastName: lastName,
    }

    this.router.navigate(['/']);
  }
}
