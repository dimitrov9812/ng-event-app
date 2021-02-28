import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event-service.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../services/event.model';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {
  public event: any;
  public isDirty: boolean = false;
  public addMode: boolean = false;
  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params['id'];
    this.event = this.eventService.getEvent(id);
  }

  addSession(): void {
    this.addMode = true;
  }

  handleNewSessionSave(session: ISession) {
    let nextId = this.event.sessions.length + 1;
    console.log(nextId);
    session.id = nextId;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;
  }

  handleCancel(): void {
    this.addMode = false;
  }
}
