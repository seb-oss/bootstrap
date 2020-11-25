import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhiteComponent } from './white.component';

describe('WhiteComponent', () => {
  let component: WhiteComponent;
  let fixture: ComponentFixture<WhiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
