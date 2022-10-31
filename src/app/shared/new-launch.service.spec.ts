import { TestBed } from '@angular/core/testing';

import { NewLaunchService } from './new-launch.service';

describe('NewLaunchService', () => {
  let service: NewLaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewLaunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
