import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../activities.service';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { Activities } from '../activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  // activities: any = [];
  faMinus = faMinus;
  activities: Activities[]= [];

  constructor(public activitiesService: ActivitiesService) { }

  ngOnInit(): void {
    this.getAllActivities();
  }

  // getAllActivities(): void {
  //   this.activitiesService.getAllActivities().subscribe((res: any) => {
  //     this.activities = res
  //     console.log(this.activities);
  //   });
  // }

  // Get activities from Open Api
  getAllActivities(): void {
    this.activitiesService.getAllActivities().subscribe((res: Activities) => {
      this.activities.push(res);
      console.log(this.activities);
    });
  } 

  hasProp(o:any, name:any) {
    return o.hasOwnProperty(name);
  }

}
