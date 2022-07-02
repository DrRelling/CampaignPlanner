import { TestBed } from '@angular/core/testing';

import { PopupNoteService } from './popup-note.service';

describe('PopupNoteService', () => {
  let service: PopupNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
