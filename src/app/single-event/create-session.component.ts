import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../services/event.model';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  public newSessionForm: FormGroup;
  public name: FormControl;
  public presenter: FormControl;
  public level: FormControl;
  public duration: FormControl;
  public abstract: FormControl;

  @Output() saveNewSession: EventEmitter<ISession> = new EventEmitter<ISession>();
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required,
                                         Validators.maxLength(400)]);

    this.newSessionForm = new FormGroup({
       name:this.name,
       presenter: this.presenter,
       duration: this.duration,
       level: this.level,
       abstract: this.abstract
    })
  }

  saveSession(formValue: any) {
    let session: ISession = {
      id: 0,
      name: formValue.name,
      duration: formValue.duration,
      level: formValue.level,
      presenter: formValue.presenter,
      abstract: formValue.abstract,
      voters: []
    }
    this.saveNewSession.emit(session);
  }

  cancelButton() {
    this.cancel.emit(true);
  }
}
