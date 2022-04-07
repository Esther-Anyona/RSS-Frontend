import { TestBed } from '@angular/core/testing';

import { ProfileRegisterService } from './profile-register.service';

describe('ProfileRegisterService', () => {
  let service: ProfileRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
