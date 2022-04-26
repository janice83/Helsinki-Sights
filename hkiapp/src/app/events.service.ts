import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  // getAllEvents(): any {
  //   const events = this.http.get('assets/data/events.json');
  //   return events;
  // }

  // Get data from Api
  getAllEvents(): Observable<any> {
    const events = this.http.get(this.apiUrl + '/v1/events');
    return events;
  }

  // Markers from Api
  apiEventsMarkers() {
    return this.http.get(this.apiUrl + '/v1/events');
  }
}
