import { Component, OnInit } from '@angular/core';
import { Contact } from '../../shared/Contact';
import { MailService } from '../../service/mail.service';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {

  constructor(private _mailService: MailService) { }

  contacts : Contact[]; 
  ngOnInit(): void {
    this.readContact();
  }

  readContact() {
  	return this._mailService.readMail().subscribe(
  		data => {
  			this.contacts = data['msg']

  		},
  		error => {
  			console.log(error);
  		}
  	)
  }

  doDelete(contact) {
    this._mailService.deleteMail(contact._id).subscribe(
      data => {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
      },
      error => {
        console.log(error);
      }
     )
  }

}
