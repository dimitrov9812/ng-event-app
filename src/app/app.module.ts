// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent} from './event-thumbnail/event-thumbnail.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
