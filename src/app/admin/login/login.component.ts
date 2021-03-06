import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    email : "",
    password : ""
  };
  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  errorMsg = '';

  loginUser(loginUserData){
  	this._auth.loginUser(this.loginUserData)
  		.subscribe(
  			res => {
          localStorage.setItem('token', res.token)
          this._router.navigate(['/admin-dashboard'])
        },
  			err => {
          if(err instanceof HttpErrorResponse) {
            if(err.status == 400) {
              this.errorMsg = "Invalid Email"
            }
            if(err.status == 401) {
              this.errorMsg = "Invalid Password"
            }
          }
        }
  		)
  }

}
