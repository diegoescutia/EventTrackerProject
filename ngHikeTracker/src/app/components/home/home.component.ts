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

   deleteTodo(id: number) {
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
}
