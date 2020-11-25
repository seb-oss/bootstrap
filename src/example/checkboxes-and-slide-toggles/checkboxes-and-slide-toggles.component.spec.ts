import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxesAndSlideTogglesComponent } from './checkboxes-and-slide-toggles.component';

describe('CheckboxesAndSlideTogglesComponent', () => {
  let component: CheckboxesAndSlideTogglesComponent;
  let fixture: ComponentFixture<CheckboxesAndSlideTogglesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxesAndSlideTogglesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxesAndSlideTogglesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
