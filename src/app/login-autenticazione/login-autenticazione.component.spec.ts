import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAutenticazioneComponent } from './login-autenticazione.component';

describe('LoginAutenticazioneComponent', () => {
  let component: LoginAutenticazioneComponent;
  let fixture: ComponentFixture<LoginAutenticazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAutenticazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAutenticazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
