import { TestBed, inject } from '@angular/core/testing';

import { HttpBookService } from './http-book.service';

describe('HttpBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpBookService]
    });
  });

  it('should be created', inject([HttpBookService], (service: HttpBookService) => {
    expect(service).toBeTruthy();
  }));
});
