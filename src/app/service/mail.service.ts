import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../shared/contact';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private contact: Contact;
  private _url: string = "http://localhost:3000/contact";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  sendMail(contact: Contact) {
  	return this.http.post<any>(this._url + '/send', contact, {headers: this.headers});
 }

  readMail() {
  	return this.http.get(this._url + '/read',  {headers: this.headers});
  }

  deleteMail(id: string) {
  	return this.http.delete(this._url + '/delete/' + id, {headers: this.headers});
 } 

}
