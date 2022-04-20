import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  // creates popup for place on map 
  makePlacePopup(data: any): string {
    return `` +
    `<div> <h6>${data.name.fi}</h6> 
    <a target="_blank" href="${ data.info_url }"> ${data.info_url} </a>
    <p>${data.location.address.street_address} 
    <br> ${data.location.address.postal_code} 
    <br> ${data.location.address.locality}</p>
    </div>`
    // <div>Nimi: ${data.name.fi}</div>
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
    `<div>Nimi: ${data.name.fi}</div>`
    // `<div><a routerLink="${'/places-detail/' + data.id }>Nimi: ${data.name.fi}</a></div>`
  }

   // Creates popup for activities
   makeActivitiesPopup(data:any): string {
    if(data.descriptions.fi == undefined){
    return `` +
    `<div> 
    <h6>${data.descriptions.en.name}</h6>
    <a target="_blank" href="${ data.siteUrl }"> ${ data.siteUrl } </a>
    </div>`
  }else {
    return `` +
    `<div> 
    <h6>${data.descriptions.fi.name}</h6>
    <a target="_blank" href="${ data.siteUrl }"> ${ data.siteUrl } </a>
    <p>${ data.address.streetName }
    <br>${ data.address.postalCode }
    <br>${ data.address.city }</p>
    </div>`
  }
  }
}
