import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { PlacesDetailComponent } from './places-detail/places-detail.component';

const routes: Routes = [
  { path: 'places-detail/:id', component: PlacesDetailComponent },
  { path: 'front-page', component: FrontPageComponent},
  { path: 'places-list', component: PlacesListComponent },
  { path: '', redirectTo: '/front-page', pathMatch: 'full'}
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
