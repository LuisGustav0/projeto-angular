import { TestBed } from '@angular/core/testing';

import { InnovationUiService } from './innovation-ui.service';

describe('InnovationUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InnovationUiService = TestBed.get(InnovationUiService);
    expect(service).toBeTruthy();
  });
});
