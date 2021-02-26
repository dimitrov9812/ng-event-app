import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `
  <site-header></site-header>
  <router-outlet></router-outlet>
  `
})
export class EventAppComponent {
  title = 'Event App';
}
