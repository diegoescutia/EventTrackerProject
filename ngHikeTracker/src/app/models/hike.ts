import { Time } from "@angular/common";

export class Hike {
  id: number;
  description: string;
  distance: number;
  time: string;
  pace: number;
  location: string;
  date: string;

  constructor(id: number=0,
    description: string='',
    distance: number=0,
    time: string='',
    pace: number=0,
    location: string='',
    date: string=''
    ){

      this.id=id;
      this.description=description;
      this.distance= distance;
      this.time= time;
      this.pace= pace;
      this.location= location;
      this.date= date;
    }
}
