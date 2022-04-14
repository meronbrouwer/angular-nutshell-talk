import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {LoginService} from "../service/login/login.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

  public onLogin(username: string, password: string): void {
    this.loginService.login(username, password);
  }
}
