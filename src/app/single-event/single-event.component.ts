import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {
  public event: any;
  public isDirty: boolean = false;
  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: number = +this.route.snapshot.params['id'];
    this.event = this.eventService.getEvent(id);
  }

  canDeactivate() {

  }
}
