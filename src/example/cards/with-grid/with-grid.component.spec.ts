import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithGridComponent } from './with-grid.component';

describe('WithGridComponent', () => {
  let component: WithGridComponent;
  let fixture: ComponentFixture<WithGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WithGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
