import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsSizesComponent } from './buttons-sizes.component';

describe('ButtonsSizesComponent', () => {
  let component: ButtonsSizesComponent;
  let fixture: ComponentFixture<ButtonsSizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsSizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
