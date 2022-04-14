import { Injectable } from '@angular/core';
import { PlacesListComponent } from './places-list/places-list.component';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private http: HttpClient) { }

  getAllPlaces(): any {
    const places = this.http.get('assets/data/places.json');
    return places;
  }
}


