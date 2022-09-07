import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Login} from '../model/login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  roles: string;
  rememberMeBox = false;
  login: Login = {};

  formLogin: FormGroup;

  constructor(private authentication: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  submitLogin() {
    this.login = this.formLogin.value;
    this.authentication.authenticate(this.login.username, this.login.password).subscribe(value => {
      if (value != undefined) {
        this.roles = value.grantList[0];
        localStorage.setItem('username', this.login.username);
        const tokenStr = 'Bearer ' + value.token;
        localStorage.setItem('token', tokenStr);
        localStorage.setItem('roles', this.roles);
      }
      this.router.navigateByUrl("home");
    })
  }
}
