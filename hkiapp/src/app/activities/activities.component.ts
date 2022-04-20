import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activities: any = [];
  faMinus = faMinus;
  

  constructor(public activitiesService: ActivitiesService) { }

  ngOnInit(): void {
    this.getAllActivities();
  }

  getAllActivities(): void {
    this.activitiesService.getAllActivities().subscribe((res: any) => {
      this.activities = res;
      console.log(this.activities);
    });
  }

  hasProp(o:any, name:any) {
    return o.hasOwnProperty(name);
  }

}