import { AuthServiceService } from './../services/authservice/auth-service.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthServiceService) { }

  googleLogin() {
    this.authService.googleLogin();
  }
  fbLogin() {
    this.authService.fbLogin();
  }


}
