import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

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


  getAllEvents(): void {
    this.eventsService.getAllEvents().subscribe((res: any) => {
      this.events = res
      // this.places.sort((a: { age: number; }, b: { age: number; }) => (a.age < b.age) ? 1 : (a.age === b.age) ? ((a.age < b.age) ? 1 : -1) : -1 );
      console.log(this.events)
    })
  }

}
