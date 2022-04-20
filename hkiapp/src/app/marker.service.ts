import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  places: string = '/assets/data/places.json';
  events: string = 'assets/data/events.json';
  activities:string = '/assets/data/activities.json';


  constructor(private http: HttpClient, private popupService: PopupService) { }

  // creates markers for places read from data file and add to map
  makePlacesMarkers(map: L.Map): void {
    this.http.get(this.places).subscribe((res: any) => {
      for(const p of res) {
        const lon = p.location.lon;
        const lat = p.location.lat;
        const marker = L.marker([lat, lon]);

        marker.bindPopup(this.popupService.makePlacePopup(p));
        marker.addTo(map);
      }
    })
  }

  // creates marker for users location and add to map
  makeMyLocationMarker(map: L.Map): void {
    navigator.geolocation.getCurrentPosition((position) => {
      const currentLat = position.coords.latitude;
      const currentLon = position.coords.longitude;
      const marker = L.circleMarker([currentLat, currentLon]);
      marker.setStyle({color: 'red'})
      
      marker.bindPopup(this.popupService.makeCurrentLocPopup());
      
      marker.addTo(map);
    })
    
  }

  // creates markers for events and add to map
  makeEventsMarkers(map: L.Map): void {
    this.http.get(this.events).subscribe((res: any) => {
      for(const p of res) {
        const lon = p.location.lon;
        const lat = p.location.lat;
        const marker = L.marker([lat, lon]);

        marker.bindPopup(this.popupService.makeEventPopup(p));
        marker.addTo(map);
      }
    })
  }

  
  // Create and place markers for activities on the map
  makeActivitiesMarkers(map: L.Map): void {
    this.http.get(this.activities).subscribe((res:any) => {
      for (const p of res){
        if(p.address.location !== null) {
          const lat = p.address.location.lat;
        const lon = p.address.location.long;
          const marker = L.marker([lat, lon]);
          marker.bindPopup(this.popupService.makeActivitiesPopup(p));
          marker.addTo(map);
        }else {
          continue;
        }
      }
    });
  }
  
}
