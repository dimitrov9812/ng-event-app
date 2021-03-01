// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
// Components
import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent} from './event-thumbnail/event-thumbnail.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { SingleEventComponent } from './single-event/single-event.component';
import { Error404Component } from './errors/404.component';

// Routes
import { appRoutes } from './routes';
import { CreateEventComponent } from './create-event/create-event.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './profile/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent } from './single-event/create-session.component';
import { SessionListComponent } from './single-event/session-list/session-list.component';
import { CollapsibleWellComponent } from './collapsible-well/collapsible-well.component';
import { DurationPipe } from './pipes/duration.pipe';
import { ModalComponent } from './modal/modal.component';
import { UpvoteComponent } from './upvote/upvote.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    // Components
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    SiteHeaderComponent,
    SingleEventComponent,
    CreateEventComponent,
    ProfileComponent,
    LoginComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    ModalComponent,
    UpvoteComponent
  ],
  bootstrap: [EventAppComponent],
  providers: [
    {provide: 'canDeactivate', useValue: checkDirtyState},
    {provide: 'canDeactivateProfile', useValue: checkDirtyStateProfile}
  ]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(' You have unsaved information, do you really want to cancel?');
  }
  return true;
}

export function checkDirtyStateProfile(component: ProfileComponent) {
  if (component.isDirty) {
    return window.confirm(' You have unsaved information, do you really want to cancel?');
  }
  return true;
}
