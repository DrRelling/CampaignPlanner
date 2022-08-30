import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityFormDialogComponent } from './entity-form-dialog.component';

describe('EntityFormDialogComponent', () => {
  let component: EntityFormDialogComponent;
  let fixture: ComponentFixture<EntityFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityFormDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
