import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ISession } from 'src/app/services/event.model';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, OnChanges{
  @Input('sessions') sessions: ISession[];
  @Input('filterBy') filterBy: string;
  @Input('sortBy') sortBy: string;
  public visibleSessions: ISession[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortSessions(this.sortBy);
    }
  }

  filterSessions(filter: string) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter((session) => {
        return session.level.toLocaleLowerCase() === filter;
      })
    }
  }

  sortSessions(sort: string) {
    if (this.sortBy == 'name') {
      this.visibleSessions.sort((s1: ISession, s2: ISession) => {
        if (s1.name > s2.name) return 1;
        else if (s1.name == s2.name) return 0;
        else return -1;
      });
    } else {
      this.visibleSessions.sort((s1: ISession, s2: ISession) => {
        return s2.voters.length - s1.voters.length;
      })
    }
  }

}
