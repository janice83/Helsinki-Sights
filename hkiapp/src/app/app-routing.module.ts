import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesDetailComponent } from './places-detail/places-detail.component';
import { EventsComponent } from './events/events.component';
import { ActivitiesComponent } from './activities/activities.component';

const routes: Routes = [
  { path: 'front-page', component: FrontPageComponent},
  { path: 'places-list', component: PlacesListComponent },
  { path: '', redirectTo: '/front-page', pathMatch: 'full'},
  { path: 'events', component: EventsComponent},
  { path: 'activities', component: ActivitiesComponent},
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
