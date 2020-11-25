import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripedComponent } from './striped.component';

describe('StripedComponent', () => {
  let component: StripedComponent;
  let fixture: ComponentFixture<StripedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StripedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StripedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
