import { TestBed } from '@angular/core/testing';

import { GrocessaryService } from './grocessary.service';

describe('GrocessaryService', () => {
  let service: GrocessaryService;

  // Set up the test environment and inject the service
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrocessaryService);
  });

  // This test checks if the service was created successfully.
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
