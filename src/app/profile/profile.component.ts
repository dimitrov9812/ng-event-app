import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  templateUrl: "./profile.component.html"
})
export class ProfileComponent {
  public isDirty: boolean = true;

  constructor(private router: Router) {}

  onCancel(): void {
    console.log('clicked')
    this.router.navigate(['/']);
  }
}
