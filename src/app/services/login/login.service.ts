import {Injectable} from '@angular/core';

@Injectable()
export class LoginService {

  constructor() {
  }

  public login(username: string, password: string): void {
    console.log('Login is now handled by the Service, more hooray!');
  }

}
