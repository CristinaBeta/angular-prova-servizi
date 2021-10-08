import { TestBed } from '@angular/core/testing';

import { CondivisioneDatiService } from './condivisione-dati.service';

describe('CondivisioneDatiService', () => {
  let service: CondivisioneDatiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CondivisioneDatiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
