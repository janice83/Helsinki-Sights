import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-places-list',
  templateUrl: './places-list.component.html',
  styleUrls: ['./places-list.component.css']
})
export class PlacesListComponent implements OnInit {
  places:any = []

  constructor(public placesService: PlacesService) { }

  ngOnInit(): void {
    this.getAllPlaces();
  }

  getAllPlaces(): void {
    this.placesService.getAllPlaces().subscribe((res: any)=>{
      this.places = res
      // this.places.sort((a: { age: number; }, b: { age: number; }) => (a.age < b.age) ? 1 : (a.age === b.age) ? ((a.age < b.age) ? 1 : -1) : -1 );
      console.log(this.places)
    })
  }

}
