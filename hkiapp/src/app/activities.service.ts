import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  // getAllActivities(): any {
  //   const activities = this.http.get('assets/data/activities.json');
  //   return activities;
  // }

   // Get data from Api
  getAllActivities(): Observable<any> {
    const activities = this.http.get(this.apiUrl + '/v1/activities');
    return activities;
  }

  //  Markers from Api
   apiActivitiesMarkers() {
    return this.http.get(this.apiUrl + '/v2/activities');
  }
}
