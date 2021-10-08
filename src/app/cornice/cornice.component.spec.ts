import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorniceComponent } from './cornice.component';

describe('CorniceComponent', () => {
  let component: CorniceComponent;
  let fixture: ComponentFixture<CorniceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorniceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
