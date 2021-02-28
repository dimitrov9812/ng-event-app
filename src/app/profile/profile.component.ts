import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: "./profile.component.html"
})
export class ProfileComponent {
  public isDirty: boolean = true;
  public profileForm: FormGroup;

  constructor(private router: Router,
              private authService: AuthService) {}

  ngOnInit() {
    let firstName: FormControl = new FormControl(this.authService.user.firstName, Validators.required);
    let lastName: FormControl = new FormControl(this.authService.user.lastName, Validators.required);

    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }
  onCancel(): void {
    console.log('clicked')
    this.router.navigate(['/']);
  }

  updateUser(): void{
    this.authService.updateUser('test','test');
  }
}
