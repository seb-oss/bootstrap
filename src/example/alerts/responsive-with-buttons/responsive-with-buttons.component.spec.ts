import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveWithButtonsComponent } from './responsive-with-buttons.component';

describe('ResponsiveWithButtonsComponent', () => {
  let component: ResponsiveWithButtonsComponent;
  let fixture: ComponentFixture<ResponsiveWithButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveWithButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveWithButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
