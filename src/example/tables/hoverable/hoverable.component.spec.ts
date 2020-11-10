import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverableComponent } from './hoverable.component';

describe('HoverableComponent', () => {
  let component: HoverableComponent;
  let fixture: ComponentFixture<HoverableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoverableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoverableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
