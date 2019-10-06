import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCajaComponent } from './login-caja.component';

describe('LoginCajaComponent', () => {
  let component: LoginCajaComponent;
  let fixture: ComponentFixture<LoginCajaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCajaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
