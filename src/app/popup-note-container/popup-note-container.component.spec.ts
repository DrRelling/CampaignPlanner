import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNoteContainerComponent } from './popup-note-container.component';

describe('PopupNoteContainerComponent', () => {
  let component: PopupNoteContainerComponent;
  let fixture: ComponentFixture<PopupNoteContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupNoteContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNoteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
