import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DismissableComponent } from './dismissable.component';

describe('DismissableComponent', () => {
  let component: DismissableComponent;
  let fixture: ComponentFixture<DismissableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DismissableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DismissableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
