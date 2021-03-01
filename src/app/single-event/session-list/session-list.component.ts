import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ISession } from 'src/app/services/event.model';
import { VotersService} from 'src/app/services/voters-service.service';

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

  constructor(public authService: AuthService,
              private votersService: VotersService) { }

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

  toggleVote(session: ISession): void {
    if (this.userHasVoted(session)) {
      console.log("DELETING USER VOTE");
      this.votersService.deleteVoter(session, this.authService.user.userName);
    } else {
      this.votersService.addVoter(session, this.authService.user.userName);
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.votersService.userHasVoted(session, this.authService.user.userName);
  }
}
