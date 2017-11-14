import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) {
  }

  public login(username: string, password: string): void {
    console.log('Login is now handled by the Service, more hooray!');
  }

}
