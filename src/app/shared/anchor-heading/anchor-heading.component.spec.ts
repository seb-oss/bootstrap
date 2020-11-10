import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorHeadingComponent } from './anchor-heading.component';

describe('AnchorHeadingComponent', () => {
  let component: AnchorHeadingComponent;
  let fixture: ComponentFixture<AnchorHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnchorHeadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
