import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {LoginService} from '../services/login/login.service';
import {HttpClientModule} from '@angular/common/http';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let loginService: LoginService;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [LoginService],
      imports: [HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    loginService = fixture.debugElement.injector.get(LoginService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call login() on the LoginService when onLogin is called', () => {
    const spy = spyOn(loginService, 'login');

    component.onLogin('piet', 'wachtwoord');
    expect(spy).toHaveBeenCalled();
  });

  it('should call login() on the LoginService when onLogin is called', () => {
    const spy = spyOn(loginService, 'login');

    component.onLogin('piet', 'wachtwoord');
    expect(spy).toHaveBeenCalledWith('piet', 'wachtwoord');
  });
});
