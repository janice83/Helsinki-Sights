import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any = []

  constructor(public eventsService: EventsService) { }

  ngOnInit(): void {
    this.getAllEvents();
  }

  // gets all events and sorts them in ascending order according to starting date
  getAllEvents(): void {
    this.eventsService.getAllEvents().subscribe((res: any) => {
      this.events = res;
      this.events.sort((x: { event_dates: { starting_day: string | number | Date; }; }, y: { event_dates: { starting_day: string | number | Date; }; }) => +new Date(x.event_dates.starting_day) - +new Date(y.event_dates.starting_day));
      console.log(this.events)
    })
  }

}
