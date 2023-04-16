import { TestBed } from '@angular/core/testing';

import { UrlsProviderService } from './urls-provider.service';

describe('UrlsProviderService', () => {
  let service: UrlsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
