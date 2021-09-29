import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DopoLoginComponent } from './dopo-login.component';

describe('DopoLoginComponent', () => {
  let component: DopoLoginComponent;
  let fixture: ComponentFixture<DopoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DopoLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DopoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
