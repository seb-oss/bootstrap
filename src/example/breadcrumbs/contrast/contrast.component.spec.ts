import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrastComponent } from './contrast.component';

describe('ContrastComponent', () => {
  let component: ContrastComponent;
  let fixture: ComponentFixture<ContrastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContrastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContrastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
