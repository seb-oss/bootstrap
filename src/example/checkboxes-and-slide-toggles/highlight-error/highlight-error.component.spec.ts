import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightErrorComponent } from './highlight-error.component';

describe('HighlightErrorComponent', () => {
  let component: HighlightErrorComponent;
  let fixture: ComponentFixture<HighlightErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
