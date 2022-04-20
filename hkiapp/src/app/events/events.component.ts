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


  getAllEvents(): void {
    this.eventsService.getAllEvents().subscribe((res: any) => {
      this.events = res
      this.events.sort((b: { date1: string | number | Date; }, a: { date1: string | number | Date; }) => new Date(b.date1).getTime() - new Date(a.date1).getTime());
      // this.places.sort((a: { age: number; }, b: { age: number; }) => (a.age < b.age) ? 1 : (a.age === b.age) ? ((a.age < b.age) ? 1 : -1) : -1 );
      console.log(this.events)
    })
  }

}
