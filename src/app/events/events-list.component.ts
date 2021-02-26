import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: "./events-list.component.html"
})
export class EventsListComponent {
  public events: any[] = [{
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 300,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  },
  {
    id: 2,
    name: 'Angular Connect - 2',
    date: '9/26/2036',
    time: '10:00 am',
    price: 300,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  },
  {
    id: 3,
    name: 'Angular Connect - 3',
    date: '9/26/2036',
    time: '10:00 am',
    price: 300,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  },
  {
    id: 4,
    name: 'Angular Connect - 4',
    date: '9/26/2036',
    time: '10:00 am',
    price: 300,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }
]
}
