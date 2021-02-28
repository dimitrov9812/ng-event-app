import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'events-list',
  templateUrl: "./events-list.component.html"
})
export class EventsListComponent implements OnInit {
  public events: any = [];

  constructor(private eventService: EventService,
              private toastrService: ToastrService) {}

  ngOnInit() {
    this.eventService.getEvents()
                     .subscribe((data: any) => {
                         this.events = data;
                      });
  }

  handleThumbnailClick(eventName: string) {
    this.toastrService.success(eventName);
  }
}
