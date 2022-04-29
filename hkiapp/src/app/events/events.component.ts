import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { Events } from '../event';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  // events: any = []
  events: Events[] = [];

  constructor(public eventsService: EventsService) { }

  ngOnInit(): void {
    this.getAllEvents();
  }

  // gets all events and sorts them in ascending order according to starting date
  // getAllEvents(): void {
  //   this.eventsService.getAllEvents().subscribe((res: any) => {
  //     this.events = res;
  //     this.events.sort((x: { event_dates: { starting_day: string | number | Date; }; }, y: { event_dates: { starting_day: string | number | Date; }; }) => +new Date(x.event_dates.starting_day) - +new Date(y.event_dates.starting_day));
  //     console.log(this.events)
  //   })
  // }

   // Get places from Open Api
   getAllEvents(): void {
    this.eventsService.getAllEvents().subscribe((res: Events) => {
      this.events.push(res);
      // this.places.sort((a: { age: number; }, b: { age: number; }) => (a.age < b.age) ? 1 : (a.age === b.age) ? ((a.age < b.age) ? 1 : -1) : -1 );
      
      console.log(this.events)
    })
  }

}
