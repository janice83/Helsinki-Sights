import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  // creates popup for place on map 
  makePlacePopup(data: any): string {
    return `` +
    `<div>Nimi: ${data.name.fi}</div>`
    // `<div><a routerLink="${'/places-detail/' + data.id }>Nimi: ${data.name.fi}</a></div>`
  }

  // creates popup for current location on map
  makeCurrentLocPopup(): string {
    return `` +
    `<div>Olet Tässä!</div>`
  }

  // creates popup for event on map 
  makeEventPopup(data: any): string {
    return `` +
    `<div>Nimi: ${data.name.fi}
    <p>Aika: ${data.event_dates.starting_day}</p>
    <p>Osoite: ${data.location.address.street_address}, ${data.location.address.postal_code} ${data.location.address.locality}
    </div>`
    // `<div><a routerLink="${'/places-detail/' + data.id }>Nimi: ${data.name.fi}</a></div>`
  }

   // Creates popup for activities
   makeActivitiesPopup(data:any): string {
    if(data.descriptions.fi == undefined){
    return `` +
    `<div> ${data.descriptions.en.name}</div>`
  }else {
    return `` +
    `<div> ${data.descriptions.fi.name}</div>`
  }
  }
}
