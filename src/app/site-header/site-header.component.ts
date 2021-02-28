import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/event-service.service';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  public events: any[] = [];
  constructor(private eventService: EventService,
              private router: Router,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.eventService.getEvents()
                     .subscribe((data: any) => {
                         this.events = data;
                      });
  }

  navigateProfile() {
    this.router.navigate(['/user/profile'])
  }
}
