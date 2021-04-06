import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsDataService {

  constructor(private http: HttpClient) { }
  url = 'https://api.covid19api.com/summary';

  tabsCoronaData() : Observable<any> {
  	return this.http.get(this.url)
  }
}
