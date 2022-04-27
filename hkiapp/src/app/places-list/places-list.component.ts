import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {
  places: any = []
  currentCoords: number[] = [];

  constructor(public placesService: PlacesService) { }

  ngOnInit(): void {
    this.getAllPlaces();
    this.getCurrentCoords();
  }

  getAllPlaces(): void {
    this.placesService.getAllPlaces().subscribe((res: any) => {
      this.places = res
      for(const place of this.places) {
        place.distance = this.calculateDistance(this.currentCoords, [place.location.lat, place.location.lon]);
      }
      this.places.sort((a: { distance: number; }, b: { distance: number; }) => a.distance - b.distance);
      // console.log(this.places[0].distance);
      // for(const place of this.places[0].data) {
      //   place.distance = this.calculateDistance(this.currentCoords, [place.location.lat, place.location.lon]);
      // }
      // this.places[0].data.sort((a: { distance: number; }, b: { distance: number; }) => a.distance - b.distance);
    })
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
    // return d;
    // if(d >= 1) {
    //   return d.toFixed(2) + " km";
    // } else {
    //   var m = d*1000;
    //   return Math.round(m) + " m";
    // }
    return d.toFixed(2);
  }

  toRad(value: number) {
    return value * (Math.PI / 180);
  }

  
}




