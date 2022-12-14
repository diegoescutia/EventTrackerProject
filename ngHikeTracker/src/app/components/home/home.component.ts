import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Hike } from 'src/app/models/hike';
import { HikeService } from 'src/app/services/hike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selected: Hike | null = null;
  newHike: Hike = new Hike();
  editHike: Hike | null = null;
  hikes: Hike[] = [];
  today: number = Date.now();


  constructor(
    private hikeService:  HikeService
  ) { }

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.hikeService.index().subscribe(
      {
        next: (data) => {
          this.hikes = data
        },
        error: (err) => {
          console.error('HomeComponent.reload(): error loading hikes:');
          console.error(err);
        }
      }
    )
  }
  displayHike(hike: Hike){
    this.selected = hike;
  }

  displayTable(){
    this.selected = null;
  }

  addHike(){
    this.hikeService.create(this.newHike).subscribe(
      {
        next: (data) => {
          this.newHike = new Hike();
          this.reload();
        },
        error: (err) => {
          console.error('HomeComponent.create(): error creating Hike:');
          console.error(err);
        }
      }
    );
  }

  setEditHike() {
    this.editHike = Object.assign({}, this.selected);
  }

  updateHike(updatedHike: Hike) {
    this.hikeService.update(updatedHike).subscribe(
     {
       next: (data) => {
         this.selected = data;
         this.editHike = null;
         this.reload();
       },
       error: (err) => {
         console.error('HomeComponent.updateHike(): error updating hike:');
         console.error(err);
       }
     }
   );

   }

   deleteHike(id: number) {
    this.hikeService.destroy(id).subscribe(
      {
        next: () => {
          this.reload();
        },
        error: (err) => {
          console.error('HomeComponent.deleteHike(): error deleting hike:');
          console.error(err);
        }
      }
    );
  }

  totalNumberOfHikes(){
    return this.hikes.length
  }

  totalNumberOfMiles(){
    let miles: number = 0;
    for(let hike of this.hikes){
     miles += hike.distance;
    }
    return miles;
  }

  averagePace(){
    let pace: number = 0;
    for(let hike of this.hikes){
     pace = (pace + hike.pace);
    }
    return pace/this.hikes.length;
  }

  distanceComparison(){
   let percent:number= (this.totalNumberOfMiles()/3100)*100;
   return percent;
  }

}
