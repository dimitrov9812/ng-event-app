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

// Routes
import { appRoutes } from './routes';
import { CreateEventComponent } from './create-event/create-event.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    ProfileComponent
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
