import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { MatExpansionModule } from '@angular/material/expansion';
import { Places } from '../place';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {
  // places: any = []
  places: Places[] = [];

  constructor(public placesService: PlacesService) { }

  ngOnInit(): void {
    this.getAllPlaces();

  }

  // getAllPlaces(): void {
  //   this.placesService.getAllPlaces().subscribe((res: any) => {
  //     this.places = res
  //     // this.places.sort((a: { age: number; }, b: { age: number; }) => (a.age < b.age) ? 1 : (a.age === b.age) ? ((a.age < b.age) ? 1 : -1) : -1 );
  //     console.log(this.places)
  //   })
  //}

  // Get places from Open Api
  getAllPlaces(): void {
    this.placesService.getAllPlaces().subscribe((res: Places) => {
      this.places.push(res);
      // this.places.sort((a: { age: number; }, b: { age: number; }) => (a.age < b.age) ? 1 : (a.age === b.age) ? ((a.age < b.age) ? 1 : -1) : -1 );
      console.log(this.places)
    })
  }
}
