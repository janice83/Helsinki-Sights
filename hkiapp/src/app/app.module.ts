import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { PlacesListComponent } from './places-list/places-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BackButtonComponent } from './back-button/back-button.component';
import { BackButtonDirective } from './back-button.directive';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    PlacesListComponent,
    BackButtonComponent,
    BackButtonDirective
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
