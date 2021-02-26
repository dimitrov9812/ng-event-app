import { Routes } from "@angular/router";
import { CreateEventComponent } from "./create-event/create-event.component";
import { EventsListComponent } from "./events/events-list.component";
import { ProfileComponent } from "./profile/profile.component";
import { SingleEventComponent } from "./single-event/single-event.component";

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: SingleEventComponent },
  { path: 'create', component: CreateEventComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', redirectTo: '/events', pathMatch: 'full' }
]
