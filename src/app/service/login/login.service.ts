import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {LoginRequest} from "./dto/login-request.dto";
import {LoginResponse} from "./dto/login-response.dto";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private tokenReceived = new Subject<string>();
  public tokenReceived$ = this.tokenReceived.asObservable();

  private token: string | undefined;
  private user: string | undefined;

  constructor(private httpClient: HttpClient) {
  }

  public login(username: string, password: string): void {
    const url = 'http://localhost:3000/login';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const loginRequest = new LoginRequest(username, password);

    this.httpClient.post<LoginResponse>(url, loginRequest, {headers: headers}).subscribe(
      data => this.onLoggedIn(data),
      err => this.onLoginError(err));
  }

  private onLoggedIn(loginResponse: LoginResponse): void {
    this.token = loginResponse.token;
    this.user = loginResponse.user;

    console.log('We have received a token! ', this.token);
    this.tokenReceived.next(this.token);
  }

  private onLoginError(error: HttpErrorResponse): void {
    this.token = undefined;
    this.user = undefined;

    console.log('An error has occured ', error.status);
    // @ts-ignore
    this.tokenReceived.next(this.token);
  }
}
