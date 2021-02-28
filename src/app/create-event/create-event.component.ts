import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../services/event-service.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  public isDirty: boolean = true;
  public newEvent: any;

  constructor(private router: Router,
              private eventService: EventService) { }

  ngOnInit(): void {
  }

  saveEvent(formValues: any) {
    console.log(formValues);
    this.eventService.saveEvent(formValues);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
