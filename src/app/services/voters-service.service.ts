import { Injectable } from '@angular/core';
import { ISession } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class VotersService {

  constructor() { }

  deleteVoter(session: ISession, username: string): void {
    console.log(username);
    let index: number;
    session.voters.forEach(voter => {
      if (voter == username) {
        index = session.voters.findIndex((v) => v == voter);
        if (index != -1) {
          session.voters.splice(index,1);
        }
      }
    });

    console.log(session.voters);
  }

  userHasVoted(session: ISession, username: string): boolean {
    return session.voters.some((voter) => voter === username);
  }

  addVoter(session: ISession, voterName: string): void {
    session.voters.push(voterName);
  }
}
