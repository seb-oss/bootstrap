import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsMainComponent } from './buttons-main.component';

describe('ButtonsMainComponent', () => {
  let component: ButtonsMainComponent;
  let fixture: ComponentFixture<ButtonsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
