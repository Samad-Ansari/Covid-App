import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams, HttpRequest } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Feed } from '../shared/feed'

@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  public feed = new Feed;
  private _url: string = "http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  createFeed(feed: Feed) {
    return this.http.post<any>(this._url + '/feeds/create', feed, {headers: this.headers});
  }

  readFeeds() {
    return this.http.get(this._url + '/feeds/read', {headers: this.headers});
  }

  updateFeed(feed: Feed) {
    return this.http.put(this._url + '/feeds/update', feed, {headers: this.headers});
  }

  deleteFeed(id:string) {
    return this.http.delete(this._url + '/feeds/delete/' + id, {headers: this.headers});
  }

  readFeed(id: string): Observable<any> {
    return <Observable<any>>this.http.get(this._url + '/feeds/' + id, {headers: this.headers});
  }

  setter(feed: Feed){
    this.feed = feed;
  }
  getter() {
    return this.feed;
  }
}
