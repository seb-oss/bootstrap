import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinedComponent } from './outlined.component';

describe('OutlinedComponent', () => {
  let component: OutlinedComponent;
  let fixture: ComponentFixture<OutlinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutlinedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
