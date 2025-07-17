import { TestBed } from '@angular/core/testing';

import { ServerUtilsService } from './server-utils.service';

describe('ServerUtilsService', () => {
  let service: ServerUtilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerUtilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
