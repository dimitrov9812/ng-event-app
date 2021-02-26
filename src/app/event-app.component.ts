import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template: `<h2> Hello World! </h2>
  <h6>{{ title }}</h6>
  <img src='/assets/images/basic-shield.png'/>
  <events-list></events-list>
  `
})
export class EventAppComponent {
  title = 'Event App';
}
