import { TestBed } from '@angular/core/testing';

import { OfsuiLibService } from './ofsui-lib.service';

describe('OfsuiLibService', () => {
  let service: OfsuiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfsuiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
