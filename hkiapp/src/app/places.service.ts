import { Injectable } from '@angular/core';
import { PlacesListComponent } from './places-list/places-list.component';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  // getAllPlaces(): any {
  //   const places = this.http.get('assets/data/places.json');
  //   return places;
  // }

  // Get data from Api
  getAllPlaces(): Observable<any> {
    const places = this.http.get(this.apiUrl + '/v1/places');
    return places;
  }

  // Markers from Api
  apiPlaceMarkers() {
    return this.http.get(this.apiUrl + '/v1/places');
  }
}




