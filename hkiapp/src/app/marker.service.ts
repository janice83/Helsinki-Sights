import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { PopupService } from './popup.service';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  places: string = '/assets/data/places.json';


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
}