import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl:'./login.component.html'
})
export class LoginComponent {
  public userName: string = '';
  public password: string = '';
  constructor () {}

  login(formValues: any) {
    console.log(formValues);
  }
}
