import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetWrapperComponent } from './snippet-wrapper.component';

describe('SnippetWrapperComponent', () => {
  let component: SnippetWrapperComponent;
  let fixture: ComponentFixture<SnippetWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnippetWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
