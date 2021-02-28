import { Routes } from "@angular/router";
import { CreateEventComponent } from "./create-event/create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventsListComponent } from "./events/events-list.component";
import { LoginComponent } from "./profile/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { EventRouteActivator } from "./single-event/event-route-activator.service";
import { SingleEventComponent } from "./single-event/single-event.component";

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: SingleEventComponent, canActivate: [EventRouteActivator] },
  { path: 'create', component: CreateEventComponent, canDeactivate: ['canDeactivate'] },
  { path: '404' , component: Error404Component },
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '**', redirectTo: '/events', pathMatch: 'full' },
]
