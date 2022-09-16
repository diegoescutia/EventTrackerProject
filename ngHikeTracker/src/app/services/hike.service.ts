import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HikeService {

  private baseUrl = 'http://localhost:8082/'; // adjust port to match server
private url = this.baseUrl + 'api/routes'; // change 'todos' to your API path

  constructor(
    private http: HttpClient
  ) { }
}
