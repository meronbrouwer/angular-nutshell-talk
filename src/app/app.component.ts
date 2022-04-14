import {Component, OnInit} from '@angular/core';
import {LoginService} from "./service/login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public token: string | undefined;

  constructor(private loginService: LoginService) {
  }

  ngOnInit(): void {
    this.loginService.tokenReceived$.subscribe(token => this.setToken(token));
  }

  private setToken(token: string): void {
    this.token = token;
  }
}
