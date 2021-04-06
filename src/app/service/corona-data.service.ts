import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaDataService {

 

  constructor(private http:HttpClient) { }
  url = 'https://api.covidindiatracker.com/state_data.json';

  datatable() : Observable<any> {
  	return this.http.get(this.url)
  }


}
