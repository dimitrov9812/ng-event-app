import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { EventService } from '../services/event-service.service';
import { ISession } from '../services/event.model';

@Component({
  selector: 'site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
  public events: any[] = [];
  public searchTerm: string = '';
  public foundSessions: ISession[] = [];
  public isSearching: boolean = false;

  constructor(private eventService: EventService,
              private router: Router,
              private route: ActivatedRoute,
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

  searchSessions(searchTerm: string): void {
    this.isSearching = true;
    this.foundSessions = [];
    this.eventService.searchSessions(searchTerm)
                     .subscribe((sessions) => {
                       this.foundSessions = sessions;
                       this.isSearching = false;
                     });
  }

  navigate(id: Number) {
    this.router.navigate(['/events',id]);
    setTimeout(() => {
      location.reload();
    }, 200);
  }
}
