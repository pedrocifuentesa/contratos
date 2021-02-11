/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonasServicesService } from './personasServices.service';

describe('Service: PersonasServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonasServicesService]
    });
  });

  it('should ...', inject([PersonasServicesService], (service: PersonasServicesService) => {
    expect(service).toBeTruthy();
  }));
});
