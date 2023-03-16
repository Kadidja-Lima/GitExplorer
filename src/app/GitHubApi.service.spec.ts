import { TestBed } from '@angular/core/testing';

import { GitHubApiService } from './GitHubApi.service';

describe('HomeService', () => {
  let service: GitHubApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitHubApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
