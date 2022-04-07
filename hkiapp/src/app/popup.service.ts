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
}
