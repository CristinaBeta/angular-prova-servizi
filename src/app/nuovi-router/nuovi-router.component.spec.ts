import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuoviRouterComponent } from './nuovi-router.component';

describe('NuoviRouterComponent', () => {
  let component: NuoviRouterComponent;
  let fixture: ComponentFixture<NuoviRouterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuoviRouterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuoviRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
