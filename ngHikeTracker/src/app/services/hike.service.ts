import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Hike } from '../models/hike';

@Injectable({
  providedIn: 'root'
})
export class HikeService {

  private baseUrl = 'http://localhost:8082/'; // adjust port to match server
private url = this.baseUrl + 'api/routes'; // change 'todos' to your API path

  constructor(
    private http: HttpClient
  ) { }

index() {
  return this.http.get<Hike[]>(this.url).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error(
          'HikeService.index():error retrieving Hike list: ' + err
        )
      );
    })
  );
}

create(hike: Hike) {
  return this.http.post<Hike>(this.url, hike).pipe(
   catchError((err: any) => {
     console.log(err);
     return throwError(
       () => new Error(
         'HikerService.create():error creating Hike: ' + err
       )
     );
   })
  );
 }

 update(hike: Hike) {
  return this.http.put<Hike>(this.url + '/' + hike.id, hike).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error(
          'HikeService.update():error updating Hike: ' + err
        )
      );
    })
   );
}
 destroy(id: number) {
  return this.http.delete<void>(this.url + '/' + id).pipe(
    catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error(
          'HikeService.destroy():error deleting Hike: ' + err
        )
      );
    })
   );
}
}
