import { TestBed } from '@angular/core/testing';

import { UsersearchService } from './usersearch.service';

describe('UsersearchService', () => {
  let service: UsersearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
