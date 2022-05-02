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
  term='';
  currentCoords: number[] = [];
  selected = "";
  tag = "";

  constructor(public eventsService: EventsService) { }

  ngOnInit(): void {
    this.getAllEvents();
    this.getCurrentCoords();
  }

  getCurrentCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
      const currentLat = position.coords.latitude;
      const currentLon = position.coords.longitude;
      this.currentCoords.push(currentLat);
      this.currentCoords.push(currentLon);
      console.log(this.currentCoords[0]);
      console.log(this.currentCoords[1]);
    });
  }

  calculateDistance(current: number[], place: number[]) {
    var R = 6371; // km
    var dLat = this.toRad(place[0]-current[0]);
    var dLon = this.toRad(place[1]-current[1]);
    var lat1 = this.toRad(current[0]);
    var lat2 = this.toRad(place[0]);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    
    return d;
  }

  toRad(value: number) {
    return value * (Math.PI / 180);
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
      
      for(const event of this.events[0].data) {
        event.distance = this.calculateDistance(this.currentCoords, [event.location.lat, event.location.lon]);
      }
      console.log(this.events[0].data[0].event_dates.starting_day);
      this.events[0].data.sort((x: { event_dates: { starting_day: Date; }; }, y: { event_dates: { starting_day: Date; }; }) => +new Date(x.event_dates.starting_day) - +new Date(y.event_dates.starting_day));
      
      console.log(this.events)
    })
  }

}
