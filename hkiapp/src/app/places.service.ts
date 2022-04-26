import { Injectable } from '@angular/core';
import { PlacesListComponent } from './places-list/places-list.component';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  currentLat: any;
  currentLon: any;

  constructor(private http: HttpClient) { }

  getAllPlaces(): any {
    const places = this.http.get('assets/data/places.json');
    return places;
  }

}




