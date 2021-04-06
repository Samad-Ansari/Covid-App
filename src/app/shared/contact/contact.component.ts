import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { MailService } from '../../service/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact = new Contact;
  constructor(private router: Router, private _mailService: MailService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this._mailService.sendMail(this.contact)
    .subscribe(
      data => {
        this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      }
    )
  }

}
