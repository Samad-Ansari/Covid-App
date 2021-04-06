import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthService,
              private _router: Router) { }

  registerUserData = {
  	email : "",
  	password : ""
  };

  errorMsg = '';


  ngOnInit(): void {
  }


  registerUser(registerUserData) {
  	this._auth.registerUser(this.registerUserData)
  		.subscribe(
  			res => {
          localStorage.setItem('token', res.token)
          this._router.navigate(['/admin-dashboard'])
        },
  			err => {
          if(err instanceof HttpErrorResponse) {
            if(err.status == 409) {
              this.errorMsg = "User Already Exist !"
            }
          }
        }
  		)
  }

}
