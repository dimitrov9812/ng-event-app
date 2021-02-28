import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl:'./login.component.html'
})
export class LoginComponent {
  public userName: string = '';
  public password: string = '';
  constructor (private authService: AuthService) {}

  login(form: NgForm) {
    console.log(form);
    this.authService.loginUser("Test", "testpass");
    this.authService.isAuthenticated = true;
  }
}
