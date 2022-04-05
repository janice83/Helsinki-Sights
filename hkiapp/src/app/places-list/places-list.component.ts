import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';

declare const L: any;
@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {
  places: any = []
  lat!: number;
  lon!: number;

  constructor(public placesService: PlacesService) { }

  ngOnInit(): void {
    this.getAllPlaces();

    if (!navigator.geolocation) {
      console.log("location is not supported")
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      const latLong = [coords.latitude, coords.longitude];

      // Display latitude and longitude in console

      // console.log(
      //   `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`

      // );
      // Create a layer map 
      let mymap = L.map('map').setView(latLong, 13);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmFyaWs0MTAyIiwiYSI6ImNsMWtnazY5MTAwbXAzam9kMm52bWI5dm8ifQ.7PfvxSz3IrVKeeEyQ374rA', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
      }).addTo(mymap);

      let marker = L.marker(latLong).addTo(mymap);



      // Add the marker on the chart
      marker.bindPopup("Olet tässä").openPopup();


      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;

    });
   this.watchPosition;
  }

  watchPosition() {
    let desLat = 0;
    let desLon = 0;

    let id = navigator.geolocation.watchPosition((position) => {
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`

      );
      if (position.coords.latitude === desLat) {
        navigator.geolocation.clearWatch(id);
      }
    }, (err) => {
      console.log(err);
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    })



  }

  getAllPlaces(): void {
    this.placesService.getAllPlaces().subscribe((res: any) => {
      this.places = res
      // this.places.sort((a: { age: number; }, b: { age: number; }) => (a.age < b.age) ? 1 : (a.age === b.age) ? ((a.age < b.age) ? 1 : -1) : -1 );
      console.log(this.places)
    })
  }

}
