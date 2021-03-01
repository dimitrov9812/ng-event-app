import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISession } from '../services/event.model';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input('count') count: number;
  @Input('voted') voted: boolean = false;
  @Output('vote') vote: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.voted = !this.voted;
    console.log("TOGGLED")
    this.vote.emit(this.voted);
  }
}
