import { TestBed, inject } from '@angular/core/testing';

import { ProfileRequestService } from './profile-request.service';

describe('ProfileRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileRequestService]
    });
  });

  it('should be created', inject([ProfileRequestService], (service: ProfileRequestService) => {
    expect(service).toBeTruthy();
  }));
});
