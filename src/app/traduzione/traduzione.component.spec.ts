import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraduzioneComponent } from './traduzione.component';

describe('TraduzioneComponent', () => {
  let component: TraduzioneComponent;
  let fixture: ComponentFixture<TraduzioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraduzioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraduzioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
