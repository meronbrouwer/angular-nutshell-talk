import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public onLogin(username: string, password: string): void {
    console.log('Login has been called, hooray!');
  }
}
