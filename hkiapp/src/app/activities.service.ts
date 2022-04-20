import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http: HttpClient) { }

  getAllActivities(): any {
    const activities = this.http.get('assets/data/activities.json');
    return activities;
  }
}
