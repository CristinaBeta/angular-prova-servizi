import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestisciPersoneComponent } from './gestisci-persone.component';

describe('GestisciPersoneComponent', () => {
  let component: GestisciPersoneComponent;
  let fixture: ComponentFixture<GestisciPersoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestisciPersoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestisciPersoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
